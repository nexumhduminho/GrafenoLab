import React, { useMemo, useState } from "react";
import { Brain } from "lucide-react";

const defaultQuestions = [
  {
    question: "O que é o grafeno?",
    options: [
      "Uma única camada de átomos de carbono",
      "Um metal raro usado em eletrónica",
      "Um tipo de plástico muito resistente",
      "Uma mistura de carbono e silício"
    ],
    correctAnswer: 0,
    explanation:
      "O grafeno é formado por uma única camada de átomos de carbono organizada numa rede hexagonal."
  },
  {
    question: "Qual é a relação entre grafeno e grafite?",
    options: [
      "A grafite é feita de várias camadas de grafeno empilhadas",
      "O grafeno é uma forma líquida da grafite",
      "A grafite é produzida a partir do grafeno em laboratório",
      "São materiais sem qualquer relação"
    ],
    correctAnswer: 0,
    explanation:
      "A grafite é constituída por muitas camadas de grafeno sobrepostas."
  },
  {
    question: "Como foi isolado o grafeno pela primeira vez em 2004?",
    options: [
      "Com um laser de alta potência",
      "Com fita adesiva, a partir de grafite",
      "Com água e sal",
      "Com um íman muito forte"
    ],
    correctAnswer: 1,
    explanation:
      "Geim e Novoselov isolaram grafeno usando fita adesiva para separar camadas muito finas de grafite."
  },
  {
    question: "Qual destas afirmações sobre o grafeno é verdadeira?",
    options: [
      "É mais espesso do que um fio de cabelo",
      "É frágil e parte-se facilmente",
      "É muito resistente e também flexível",
      "É opaco e bloqueia quase toda a luz"
    ],
    correctAnswer: 2,
    explanation:
      "O grafeno combina elevada resistência mecânica com grande flexibilidade."
  },
  {
    question: "Porque é que o grafeno despertou tanto interesse científico e tecnológico?",
    options: [
      "Porque é barato e já substituiu todos os materiais atuais",
      "Porque reúne propriedades excecionais num material extremamente fino",
      "Porque é o único material feito de carbono",
      "Porque foi descoberto antes do diamante"
    ],
    correctAnswer: 1,
    explanation:
      "O grafeno destacou-se por combinar resistência, flexibilidade, condutividade e transparência numa única camada atómica."
  }
];

export default function QuizCard({ questions = defaultQuestions }) {
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

          <h3 className="quiz-card__title">
            Testa o que aprendeste
          </h3>
        </div>

        <p className="quiz-card__text">
          Responde a 5 perguntas rápidas sobre o capítulo “O que é o grafeno?”.
        </p>

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
            <a className="quiz-card__link" href="#propriedades">
              Avançar para Propriedades
            </a>
          </div>
        </div>
      )}
    </section>
  );
}