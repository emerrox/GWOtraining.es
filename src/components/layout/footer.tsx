export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container">
        © {new Date().getFullYear()} gwotraining.org. All rights reserved.
        <p className="mt-1">
          Professional GWO Certified Safety Training.
        </p>
      </div>
    </footer>
  );
}
