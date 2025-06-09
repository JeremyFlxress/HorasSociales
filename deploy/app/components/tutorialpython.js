import React from "react";
import "./tutorialpython.css";
import { useNavigate } from "react-router-dom";

const Tutorial = () => {

const navigate = useNavigate();

const handleNext = () => {
  navigate('/questionpython1');
};

  return (
    <div className="tutorial-container">
      <header className="tutorial-header">
        <h1>Tutorial</h1>
      </header>

      <div className="tutorial-content">
        <section className="section">
          <div className="title-bar">
            <h2>Python</h2>
          </div>
          <ul className="details-list">
            <li>This exam has <strong>35 questions</strong>.</li>
            <li>The maximum exam time is <strong>50 minutes</strong>.</li>
          </ul>

          <h3>Exam Process</h3>
          <ol className="process-list">
            <li>
              <strong>Tutorial.</strong> The tutorial (this page) provides helpful
              information about the exam environment. <strong>Read the tutorial
              carefully.</strong> When you are ready to begin taking the exam,
              select <strong>Start Exam</strong>.
            </li>
            <li>
              <strong>Exam Questions.</strong> The exam timer <strong>starts</strong>
              and the questions appear. You can move forward and back through them,
              answer them, and mark them for review or feedback.
            </li>
            <li>
              <strong>Exam Summary.</strong> The exam summary indicates the
              questions you have answered, not answered, marked for review, and
              marked for feedback. You can review and change your answers. The
              exam timer <strong>stops</strong> and your answers are submitted when
              you select <strong>Finish Exam</strong>.
            </li>
            <li>
              <strong>Feedback.</strong> You can leave feedback about the exam and
              individual questions. When you finish leaving feedback, select
              <strong> Exit Exam</strong> to display your score report.
            </li>
          </ol>

          <h3>Exam Interface and Controls</h3>
          <p>
            Each page of the exam has three panes.
          </p>
          <ul className="interface-list">
            <li>
              The Information pane at the top of the page shows the current
              question number, the total number of questions, and the remaining
              exam time. The progress bar fills to indicate the percentage of
              questions answered.
            </li>
            <li>
              The Content pane in the center of the page contains the question and
              answer options. Some Content panes are divided horizontally or
              vertically into sections. You might need to move the section dividers
              or scroll panes to see all the content.
            </li>
            <li>
              The Navigation pane at the bottom of the page contains the following
              commands for moving through the exam:
              <ul>
                <li>
                  <strong>Go to Summary</strong> Displays the Exam Summary page that
                  shows the questions you've answered, not answered, marked for
                  review, and marked for feedback.
                </li>
                <li>
                  <strong>Mark for Review</strong> Flags the question to indicate
                  that you want to return to it before you finish the exam.
                </li>
                <li>
                  <strong>Mark for Feedback</strong> Flags the question to indicate
                  that you want to leave feedback about it.
                </li>
                <li>
                  <strong>Tools</strong> Displays a menu of commands that allow you
                  to access exam environment instructions or change the color
                  scheme. Other tools, such as a calculator or reset button, might
                  be available for the current question.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="navigation-section">
          <div className="navigation-buttons">
            <button className="btn finish-btn" onClick={handleNext}>Start Exam</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tutorial;
