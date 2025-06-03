
import React from 'react';
import { MbtiType, MbtiProfile } from '../types.ts';
import { MBTI_PROFILES } from '../constants.ts';

interface ResultDisplayProps {
  mbtiType: MbtiType;
  onRestart: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ mbtiType, onRestart }) => {
  const profile = MBTI_PROFILES.find(p => p.type === mbtiType);

  if (!profile) {
    return (
      <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
        <p className="text-red-500 text-lg">Không tìm thấy thông tin cho loại tính cách này.</p>
        <button
          onClick={onRestart}
          className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
        >
          Làm lại bài trắc nghiệm
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-sky-300 p-6 md:p-10 rounded-3xl shadow-xl text-white w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">{profile.type}</h2>
        <p className="text-2xl md:text-3xl text-pink-100 mt-1 drop-shadow-sm">{profile.name}</p>
      </div>

      <div className="bg-white/25 backdrop-blur-md p-6 rounded-xl mb-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-white">Mô tả chung:</h3>
        <p className="text-base leading-relaxed text-pink-50">{profile.description}</p>
      </div>

      <div className="bg-white/25 backdrop-blur-md p-6 rounded-xl mb-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-white">Đặc điểm nổi bật:</h3>
        <ul className="list-disc list-inside space-y-1 text-pink-50">
          {profile.traits.map((trait, index) => (
            <li key={index}>{trait}</li>
          ))}
        </ul>
      </div>

      {profile.preferredCareer && (
         <div className="bg-white/25 backdrop-blur-md p-6 rounded-xl mb-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-white">Nghề nghiệp phù hợp:</h3>
          <p className="text-base text-pink-50">{profile.preferredCareer}</p>
        </div>
      )}
      
      <div className="text-center mt-10">
        <button
          onClick={onRestart}
          className="bg-white hover:bg-pink-50 text-pink-600 font-bold py-3 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-75"
        >
          Làm lại bài trắc nghiệm
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
