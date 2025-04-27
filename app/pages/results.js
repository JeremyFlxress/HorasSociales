import { useRouter } from 'next/router';
import Header from '../components/Header';
import Results from '../components/Results';
import { questions, examConfig } from '../data/questions';

export default function ExamResults() {
  const router = useRouter();
  const { score, answers } = router.query;

  if (!score || !answers) {
    return (
      <div className="container">
        <Header />
        <div className="no-results">
          <h2>No exam results found</h2>
          <p>Please complete the exam to view your results.</p>
        </div>
      </div>
    );
  }

  const parsedAnswers = JSON.parse(answers);
  const numericScore = parseInt(score);

  return (
    <div className="results-page">
      <Header />
      <Results 
        questions={questions}
        answers={parsedAnswers}
        score={numericScore}
        examConfig={examConfig}
      />
    </div>
  );
}