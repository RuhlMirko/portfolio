export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer-end">
      <p>&copy; {currentYear} Mirko Ruhl.</p>
    </footer>
  );
}
