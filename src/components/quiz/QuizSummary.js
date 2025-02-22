import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        hintsUsed: state.hintsUsed,
      });
    }
  }

  render() {
    const { state } = this.props.location;
    let stats, remark;
    const userScore = this.state.score;

    if (userScore <= 30) {
      remark = <span style={{ color: "red" }}>You need more practice!</span>;
    } else if (userScore > 30 && userScore <= 50) {
      remark = <span style={{ color: "orange" }}>Better luck next time!</span>;
    } else if (userScore <= 70 && userScore > 50) {
      remark = <span style={{ color: "yellow" }}>You can do better!</span>;
    } else if (userScore >= 71 && userScore <= 84) {
      remark = <span style={{ color: "green" }}>You did great!</span>;
    } else {
      remark = (
        <span style={{ color: "blue" }}>You\'re an absolute genius!</span>
      );
    }

    if (state !== undefined) {
      stats = (
        <Fragment>
          <div style={{ textAlign: "center" }}>
            <span className="mdi mdi-check-circle-outline success-icon"></span>
          </div>
          <h1>Quiz has ended</h1>
          <div className="container stats">
            <h4>{remark}</h4>
            <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
            <span className="stat left">Total number of questions: </span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />
            <span className="stat left">Number of attempted questions: </span>
            <span className="right">
              {this.state.numberOfAnsweredQuestions}
            </span>
            <br />
            <span className="stat left">Number of Correct Answers: </span>
            <span className="right">{this.state.correctAnswers}</span> <br />
            <span className="stat left">Number of Wrong Answers: </span>
            <span className="right">{this.state.wrongAnswers}</span>
            <br />
            <span className="stat left">Hints Used: </span>
            <span className="right">{this.state.hintsUsed}</span>
            <br />
            <ul>
              <li>
                <Link to="/play/quiz">Play Again</Link>
              </li>
              <li>
                <Link to="/">Back to Home</Link>
              </li>
            </ul>
          </div>
          
            
            
          
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <h1 className="no-stats">No Statistics Available</h1>
          <ul>
            <li>
              <Link to="/play/quiz">Take a Quiz</Link>
            </li>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
          </ul>
          
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Summary</title>
        </Helmet>
          <div className="quiz-summary">
          
              {stats}
              <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
          </div>
      </Fragment>
    );
  }
}

export default QuizSummary;
