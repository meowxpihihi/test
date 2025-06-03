
import React, { useState, useEffect, useCallback } from 'react';
import { Question, Answer, DichotomyLetter, MbtiType, TestState, MbtiDimension } from './types.ts';
import { QUESTIONS, MBTI_PROFILES } from './constants.ts';
import QuestionCard from './components/QuestionCard.tsx';
import ProgressBar from './components/ProgressBar.tsx';
import ResultDisplay from './components/ResultDisplay.tsx';

// Helper to get a random item for dynamic background or images
const getRandomImage = () => `https://picsum.photos/seed/${Math.random()}/1200/800?blur=2`; // Added a slight blur

const App: React.FC = () => {
  const [testState, setTestState] = useState<TestState>(TestState.NOT_STARTED);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [mbtiResult, setMbtiResult] = useState<MbtiType | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    setBackgroundImage(getRandomImage());
  }, []);

  const handleStartTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setMbtiResult(null);
    setTestState(TestState.IN_PROGRESS);
    setBackgroundImage(getRandomImage()); // Change background for new test
  };

  const handleAnswer = (questionId: number, value: DichotomyLetter) => {
    const newAnswers = [...answers.filter(a => a.questionId !== questionId), { questionId, value }];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        if(newAnswers.length === QUESTIONS.length) {
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
      className="min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-1000"
      style={{ 
        backgroundImage: `linear-gradient(rgba(253, 242, 248, 0.85), rgba(239, 246, 255, 0.9)), url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center' 
      }}
    >
      <header className="my-6 md:my-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
          Trắc nghiệm Tính cách MBTI
        </h1>
        <p className="text-slate-500 mt-2 text-lg">Khám phá bản thân qua 20 câu hỏi</p>
      </header>

      <main className="w-full flex flex-col items-center">
        {testState === TestState.NOT_STARTED && (
          <div className="text-center bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg max-w-lg transform transition-all hover:scale-105">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Chào mừng bạn!</h2>
            <p className="text-slate-600 mb-8">
              Bài trắc nghiệm này gồm 20 câu hỏi giúp bạn hiểu rõ hơn về xu hướng tính cách của mình.
              Hãy chọn câu trả lời phù hợp nhất với bạn. Không có câu trả lời đúng hay sai.
            </p>
            <button
              onClick={handleStartTest}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
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
            <div className="flex justify-between w-full max-w-2xl mt-6">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-2 px-6 rounded-xl shadow transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Câu trước
              </button>
              {currentQuestionIndex === QUESTIONS.length - 1 ? (
                 <button
                    onClick={handleSubmitTest}
                    disabled={answers.length < QUESTIONS.length}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-xl shadow-md transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Xem kết quả
                </button>
              ) : (
                <button
                    onClick={handleNextQuestion}
                    disabled={!answers.some(ans => ans.questionId === currentQuestion.id)}
                    className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-xl shadow transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
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
      
      <footer className="mt-10 mb-6 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} MBTI App. Dựa trên lý thuyết của Myers-Briggs.</p>
        <p>Đây là một bài trắc nghiệm mang tính tham khảo, không thay thế đánh giá chuyên nghiệp.</p>
      </footer>
    </div>
  );
};

export default App;
