import Link from 'next/link';

export default function Header() {
  return (
    <header className="results-header">
      <div className="container">
        <Link href="/">
          <a className="logo">JavaScript Certification</a>
        </Link>
        <nav>
          <Link href="/exam">
            <a className="nav-link">Take Exam</a>
          </Link>
          <Link href="/results">
            <a className="nav-link">Results</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}