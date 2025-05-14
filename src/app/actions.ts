
"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

// SMTP test credentials (hardcoded for testing purposes)
const TEST_SMTP = {
  host: 'smtp.mail.ovh.net',
  port: 465,
  secure: true, // true for 465, false for other ports
  user: 'app@totalhse.com',
  pass: 'trabajosenaltura23', // Replace with your actual password or use environment variables
  from: 'app@totalhse.com',
};

// Define the schema for form validation from the server-side
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  phone: z.string().optional().or(z.literal('')), // Allow empty string or make it truly optional
  course: z.string().optional().or(z.literal('')),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: Partial<Record<keyof ContactFormValues | "_form", string[]>> | null;
  fieldValues?: ContactFormValues;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined, // Ensure undefined if empty for optional parsing
    course: formData.get("course") || undefined, // Ensure undefined if empty for optional parsing
    message: formData.get("message"),
  };

  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      message: "Falló la validación del formulario. Por favor, revisa los campos.",
      status: "error",
      errors: { ...fieldErrors }, 
      fieldValues: { 
        name: rawFormData.name as string,
        email: rawFormData.email as string,
        phone: rawFormData.phone as string | undefined,
        course: rawFormData.course as string | undefined,
        message: rawFormData.message as string,
      }
    };
  }

  const { name, email, phone, course, message } = validatedFields.data;
  const recipientEmail = "app@totalhse.com"; // Target email

  const transporter = nodemailer.createTransport({
    host: TEST_SMTP.host,
    port: TEST_SMTP.port,
    secure: TEST_SMTP.secure,
    auth: {
      user: TEST_SMTP.user,
      pass: TEST_SMTP.pass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${TEST_SMTP.from}>`, 
      to: recipientEmail,
      replyTo: email, 
      subject: `Nueva Consulta de Curso GWO de ${name} vía gwotraining.es`,
      html: `
        <h2>Nuevo Envío de Formulario de Contacto desde gwotraining.es</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
        ${course ? `<p><strong>Curso de Interés:</strong> ${course}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    return {
      message: "¡Gracias! Tu mensaje ha sido enviado correctamente.",
      status: "success",
      errors: null,
    };
  } catch (error) {
    console.error("Error sending email via SMTP server:", error);
    let errorMessage = "No se pudo enviar el mensaje debido a un error del servidor. Por favor, inténtalo de nuevo más tarde.";
    if (error instanceof Error) {
       
    }

    return {
      message: errorMessage,
      status: "error",
      errors: { _form: ["Error del servidor durante el envío del correo."] },
      fieldValues: validatedFields.data,
    };
  }
}
