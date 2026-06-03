import { personal } from '../../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {personal.name}. Built with React &amp; passion for clean UI.
        </p>
        <p className="footer__tagline">Open to internships &amp; entry-level frontend roles.</p>
      </div>
    </footer>
  );
}
