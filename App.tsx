
import React, { useState, useEffect, useCallback } from 'react';
import { Question, Answer, DichotomyLetter, MbtiType, TestState } from './types';
import { QUESTIONS } from './constants';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultDisplay from './components/ResultDisplay';

const App: React.FC = () => {
  const [testState, setTestState] = useState<TestState>(TestState.NOT_STARTED);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [mbtiResult, setMbtiResult] = useState<MbtiType | null>(null);

  const handleStartTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setMbtiResult(null);
    setTestState(TestState.IN_PROGRESS);
  };

  const handleAnswer = (questionId: number, value: DichotomyLetter) => {
    const newAnswers = [...answers.filter(a => a.questionId !== questionId), { questionId, value }];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        if (newAnswers.length === QUESTIONS.length) {
          calculateResult(newAnswers);
        }
      }
    }, 300);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      const currentQuestion = QUESTIONS[currentQuestionIndex];
      const answeredCurrent = answers.some(ans => ans.questionId === currentQuestion.id);
      if (!answeredCurrent) {
        alert("Vui lòng chọn một câu trả lời trước khi tiếp tục.");
        return;
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResult = useCallback((finalAnswers: Answer[]) => {
    if (finalAnswers.length !== QUESTIONS.length) {
      alert("Vui lòng trả lời tất cả các câu hỏi.");
      return;
    }

    const scores: Record<DichotomyLetter, number> = {
      [DichotomyLetter.E]: 0, [DichotomyLetter.I]: 0,
      [DichotomyLetter.S]: 0, [DichotomyLetter.N]: 0,
      [DichotomyLetter.T]: 0, [DichotomyLetter.F]: 0,
      [DichotomyLetter.J]: 0, [DichotomyLetter.P]: 0,
    };

    finalAnswers.forEach(answer => {
      scores[answer.value]++;
    });

    const resultType: DichotomyLetter[] = [];
    resultType.push(scores[DichotomyLetter.E] >= scores[DichotomyLetter.I] ? DichotomyLetter.E : DichotomyLetter.I);
    resultType.push(scores[DichotomyLetter.S] >= scores[DichotomyLetter.N] ? DichotomyLetter.S : DichotomyLetter.N);
    resultType.push(scores[DichotomyLetter.T] >= scores[DichotomyLetter.F] ? DichotomyLetter.T : DichotomyLetter.F);
    resultType.push(scores[DichotomyLetter.J] >= scores[DichotomyLetter.P] ? DichotomyLetter.J : DichotomyLetter.P);

    setMbtiResult(resultType.join('') as MbtiType);
    setTestState(TestState.COMPLETED);
  }, []);

  const handleSubmitTest = () => {
    if (answers.length < QUESTIONS.length) {
      alert("Vui lòng trả lời tất cả các câu hỏi trước khi xem kết quả.");
      return;
    }
    calculateResult(answers);
  };

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const selectedValueForCurrent = answers.find(a => a.questionId === currentQuestion?.id)?.value;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-1000 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100"
    >
      <header className="my-6 md:my-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600 drop-shadow-sm">
          Trắc nghiệm Tính cách MBTI
        </h1>
        <p className="text-pink-500 mt-2 text-lg font-semibold">Khám phá bản thân qua 20 câu hỏi</p>
      </header>

      <main className="w-full flex flex-col items-center">
        {testState === TestState.NOT_STARTED && (
          <div className="text-center bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-pink-200/50 max-w-lg transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Chào mừng bạn!</h2>
            <p className="text-slate-600 mb-8">
              Bài trắc nghiệm này gồm 20 câu hỏi giúp bạn hiểu rõ hơn về xu hướng tính cách của mình.
              Hãy chọn câu trả lời phù hợp nhất với bạn. Không có câu trả lời đúng hay sai.
            </p>
            <button
              onClick={handleStartTest}
              className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl shadow-teal-200/80 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-75"
              aria-label="Bắt đầu làm bài trắc nghiệm tính cách MBTI"
            >
              Bắt đầu làm bài
            </button>
          </div>
        )}

        {testState === TestState.IN_PROGRESS && currentQuestion && (
          <>
            <ProgressBar current={currentQuestionIndex + 1} total={QUESTIONS.length} />
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              selectedValue={selectedValueForCurrent}
            />
            <div className="flex justify-between w-full max-w-2xl mt-8">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg shadow-pink-100/80 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-pink-300 disabled:shadow-md"
                aria-label="Quay lại câu hỏi trước"
              >
                Câu trước
              </button>
              {currentQuestionIndex === QUESTIONS.length - 1 ? (
                <button
                  onClick={handleSubmitTest}
                  disabled={answers.length < QUESTIONS.length}
                  className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg shadow-green-200/80 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label="Xem kết quả trắc nghiệm"
                >
                  Xem kết quả
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  disabled={!answers.some(ans => ans.questionId === currentQuestion.id)}
                  className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg shadow-teal-200/80 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label="Chuyển đến câu hỏi tiếp theo"
                >
                  Câu tiếp theo
                </button>
              )}
            </div>
          </>
        )}

        {testState === TestState.COMPLETED && mbtiResult && (
          <ResultDisplay mbtiType={mbtiResult} onRestart={handleStartTest} />
        )}
      </main>

      <footer className="mt-10 mb-6 text-center text-pink-500 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} MBTI App Dễ Thương. Dựa trên lý thuyết của Myers-Briggs.</p>
        <p>Đây là một bài trắc nghiệm vui vẻ, mang tính tham khảo, không thay thế đánh giá chuyên nghiệp.</p>
      </footer>
    </div>
  );
};

export default App;
