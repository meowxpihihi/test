
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full max-w-2xl my-6">
      <div className="bg-pink-100 rounded-full h-4 md:h-5 shadow-inner">
        <div
          className="bg-pink-400 h-4 md:h-5 rounded-full transition-all duration-500 ease-out flex items-center justify-end"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label={`Tiến độ: ${current} trên ${total} câu`}
        >
        </div>
      </div>
       <p className="text-xs text-center text-pink-700 mt-2 font-medium">
        Câu {current} / {total}
      </p>
    </div>
  );
};

export default ProgressBar;
