import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <main className="container">
        <div className="hero">
          <h1>JavaScript Certification Exam</h1>
          <p>Test your JavaScript knowledge with our comprehensive certification exam.</p>
          <div className="exam-info">
            <ul>
              <li>42 questions covering all JavaScript concepts</li>
              <li>2 hour time limit</li>
              <li>Score 700/1000 points to pass</li>
              <li>Detailed results with explanations</li>
            </ul>
          </div>
          <Link href="/exam">
            <a className="start-button">Start Exam</a>
          </Link>
        </div>
      </main>
    </div>
  );
}