export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container">
        © {new Date().getFullYear()} CursoIrata.org. All rights reserved.
        <p className="mt-1">
          Professional IRATA Certified Rope Access Training.
        </p>
      </div>
    </footer>
  );
}
