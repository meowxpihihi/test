
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full max-w-2xl my-6" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total} aria-label={`Tiến độ: ${current} trên ${total} câu hỏi`}>
      <div className="h-3 md:h-4 bg-pink-100 rounded-full shadow-inner overflow-hidden">
        <div
          className="bg-teal-400 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-center text-teal-600 mt-2 font-semibold">
        Câu {current} / {total}
      </p>
    </div>
  );
};

export default ProgressBar;
