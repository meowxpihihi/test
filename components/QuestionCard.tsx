
import React from 'react';
import { Question, DichotomyLetter } from '../types.ts';

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: number, value: DichotomyLetter) => void;
  selectedValue?: DichotomyLetter;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, selectedValue }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-2xl transform transition-all hover:shadow-xl">
      <h2 className="text-xl md:text-2xl font-semibold text-purple-700 mb-6 text-center">
        {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(question.id, option.value)}
            className={`
              w-full p-4 rounded-xl text-left transition-all duration-200 ease-in-out
              border-2 
              ${selectedValue === option.value 
                ? 'bg-pink-500 text-white border-pink-600 ring-2 ring-pink-300'
                : 'bg-purple-50 hover:bg-pink-100 text-slate-700 border-purple-200 hover:border-pink-300'}
            `}
            aria-pressed={selectedValue === option.value}
          >
            <span className="font-medium">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
