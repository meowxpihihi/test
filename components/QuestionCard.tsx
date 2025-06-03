
import React from 'react';
import { Question, DichotomyLetter } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: number, value: DichotomyLetter) => void;
  selectedValue?: DichotomyLetter;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, selectedValue }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-rose-200/70 w-full max-w-2xl transform transition-all hover:shadow-2xl hover:shadow-rose-300/70">
      <h2 className="text-xl md:text-2xl font-bold text-teal-700 mb-8 text-center">
        {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(question.id, option.value)}
            aria-pressed={selectedValue === option.value}
            className={`
              w-full p-4 rounded-xl text-left transition-all duration-200 ease-in-out
              border-2 transform focus:outline-none focus:ring-2
              ${selectedValue === option.value
                ? 'bg-teal-400 text-white border-teal-500 ring-teal-300 shadow-lg scale-105'
                : 'bg-rose-50 hover:bg-pink-100 text-slate-700 border-rose-200 hover:border-pink-300 hover:shadow-md ring-pink-200'
              }
            `}
          >
            <span className="font-semibold text-base">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
