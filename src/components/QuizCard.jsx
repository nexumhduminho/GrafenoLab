import React, { useMemo, useState } from "react";
import { Brain } from "lucide-react";

export default function QuizCard({
  questions,
  title = "Testa o que aprendeste",
  introText = "Responde a 5 perguntas rápidas sobre este capítulo.",
  resultLinkHref = "#propriedades",
  resultLinkText = "Avançar para a secção seguinte"
}) {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const totalQuestions = questions.length;
  const current = questions[currentQuestion];

  const isCorrect = useMemo(() => {
    if (selectedOption === null) return false;
    return selectedOption === current.correctAnswer;
  }, [selectedOption, current]);

  function handleStart() {
    setStarted(true);
  }

  function handleOptionClick(index) {
    if (showFeedback) return;
    setSelectedOption(index);
  }

  function handleCheckAnswer() {
    if (selectedOption === null) return;

    const answerIsCorrect = selectedOption === current.correctAnswer;

    if (answerIsCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        question: current.question,
        selectedOption,
        correctAnswer: current.correctAnswer,
        isCorrect: answerIsCorrect
      }
    ]);

    setShowFeedback(true);
  }

  function handleNext() {
    const nextIndex = currentQuestion + 1;

    if (nextIndex < totalQuestions) {
      setCurrentQuestion(nextIndex);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setStarted(false);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setUserAnswers([]);
    setFinished(false);
  }

  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <section className="quiz-card">
      {!started && !finished && (
      <div className="quiz-card__intro">
        <div className="quiz-card__header">
          <div className="audio-card__icon quiz">
            <Brain size={20} strokeWidth={1.8} />
          </div>

          <h3 className="quiz-card__title">{title}</h3>
          </div>

        <p className="quiz-card__text">{introText}</p>

        <button className="quiz-card__button" onClick={handleStart}>
          Começar quiz
        </button>
      </div>
      )}

      {started && !finished && (
        <div className="quiz-card__body">
          <div className="quiz-card__top">
            <p className="quiz-card__progress-label">
              Pergunta {currentQuestion + 1} de {totalQuestions}
            </p>
            <div className="quiz-card__progress-bar">
              <div
                className="quiz-card__progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <h3 className="quiz-card__question">{current.question}</h3>

          <div className="quiz-card__options">
            {current.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isRightAnswer = showFeedback && index === current.correctAnswer;
              const isWrongSelected =
                showFeedback && isSelected && index !== current.correctAnswer;

              let className = "quiz-card__option";

              if (isSelected) className += " is-selected";
              if (isRightAnswer) className += " is-correct";
              if (isWrongSelected) className += " is-wrong";

              return (
                <button
                  key={index}
                  type="button"
                  className={className}
                  onClick={() => handleOptionClick(index)}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {!showFeedback ? (
            <button
              className="quiz-card__button"
              onClick={handleCheckAnswer}
              disabled={selectedOption === null}
            >
              Confirmar resposta
            </button>
          ) : (
            <>
              <div
                className={`quiz-card__feedback ${
                  isCorrect ? "is-correct" : "is-wrong"
                }`}
              >
                <p className="quiz-card__feedback-title">
                  {isCorrect ? "✔️ Correto!" : "✖️ Não exatamente"}
                </p>
                <p className="quiz-card__feedback-text">{current.explanation}</p>
              </div>

              <button className="quiz-card__button" onClick={handleNext}>
                {currentQuestion + 1 === totalQuestions ? "Ver resultado" : "Seguinte"}
              </button>
            </>
          )}
        </div>
      )}

      {finished && (
        <div className="quiz-card__result">
          <h3 className="quiz-card__title">
            {score === totalQuestions
              ? `Perfeito! ${score} em ${totalQuestions}`
              : `Acertaste ${score} em ${totalQuestions}`}
          </h3>
          <p className="quiz-card__text">
            {score === totalQuestions &&
              "Excelente! Dominas muito bem os conceitos fundamentais do grafeno."}

            {score >= 3 && score < totalQuestions &&
              "Muito bem! Já tens uma boa compreensão dos principais conceitos."}

            {score === 2 &&
              "Razoável, mas ainda com algumas lacunas. Vale a pena rever os pontos principais."}

            {score <= 1 &&
              "Ainda não consolidaste os conceitos essenciais. Revê os conteúdos esta secção e tenta novamente."}
          </p>

          <div className="quiz-card__result-actions">
            <button className="quiz-card__button" onClick={handleRestart}>
              Tentar novamente
            </button>
              <a className="quiz-card__link" href={resultLinkHref}>
                {resultLinkText}
              </a>
          </div>
        </div>
      )}
    </section>
  );
}