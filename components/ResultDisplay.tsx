
import React from 'react';
import { MbtiType, MbtiProfile } from '../types';
import { MBTI_PROFILES } from '../constants';

interface ResultDisplayProps {
  mbtiType: MbtiType;
  onRestart: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ mbtiType, onRestart }) => {
  const profile = MBTI_PROFILES.find(p => p.type === mbtiType);

  if (!profile) {
    return (
      <div className="text-center p-6 bg-white rounded-2xl shadow-xl shadow-rose-200/70">
        <p className="text-red-500 text-lg font-semibold">Không tìm thấy thông tin cho loại tính cách này.</p>
        <button
          onClick={onRestart}
          className="mt-8 bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl shadow-teal-200/80 transition-transform transform hover:scale-105"
          aria-label="Làm lại bài trắc nghiệm"
        >
          Làm lại bài trắc nghiệm
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-teal-300 via-pink-300 to-purple-300 p-6 md:p-10 rounded-3xl shadow-2xl shadow-pink-300/60 text-white w-full max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">{profile.type}</h2>
        <p className="text-3xl md:text-4xl text-white/90 mt-2 font-semibold drop-shadow-sm">{profile.name}</p>
      </div>

      <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl mb-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-white">Mô tả chung:</h3>
        <p className="text-base leading-relaxed text-white/95">{profile.description}</p>
      </div>

      <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl mb-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 text-white">Đặc điểm nổi bật:</h3>
        <ul className="list-disc list-inside space-y-1.5 text-white/95 pl-2">
          {profile.traits.map((trait, index) => (
            <li key={index} className="font-medium">{trait}</li>
          ))}
        </ul>
      </div>

      {profile.preferredCareer && (
         <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl mb-10 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-white">Nghề nghiệp phù hợp:</h3>
          <p className="text-base text-white/95">{profile.preferredCareer}</p>
        </div>
      )}
      
      <div className="text-center mt-10">
        <button
          onClick={onRestart}
          className="bg-white hover:bg-rose-50 text-teal-600 font-bold py-4 px-10 rounded-xl shadow-xl hover:shadow-2xl shadow-rose-200/50 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-200 focus:ring-opacity-75"
          aria-label="Làm lại bài trắc nghiệm"
        >
          Làm lại bài trắc nghiệm
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
