
export enum DichotomyLetter {
  E = 'E', // Extraversion - Hướng ngoại
  I = 'I', // Introversion - Hướng nội
  S = 'S', // Sensing - Giác quan
  N = 'N', // Intuition - Trực giác
  T = 'T', // Thinking - Lý trí
  F = 'F', // Feeling - Tình cảm
  J = 'J', // Judging - Nguyên tắc
  P = 'P'  // Perceiving - Linh hoạt
}

export enum MbtiDimension {
  EI = 'EI', // Extraversion/Introversion
  SN = 'SN', // Sensing/Intuition
  TF = 'TF', // Thinking/Feeling
  JP = 'JP'  // Judging/Perceiving
}

export interface QuestionOption {
  text: string;
  value: DichotomyLetter;
}

export interface Question {
  id: number;
  text: string;
  dimension: MbtiDimension;
  options: [QuestionOption, QuestionOption];
}

export interface Answer {
  questionId: number;
  value: DichotomyLetter;
}

export type MbtiType = `${DichotomyLetter}${DichotomyLetter}${DichotomyLetter}${DichotomyLetter}`;

export interface MbtiProfile {
  type: MbtiType;
  name: string;
  description: string;
  traits: string[];
  preferredCareer?: string; // Vietnamese: Nghề nghiệp phù hợp
}

export enum TestState {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}
    