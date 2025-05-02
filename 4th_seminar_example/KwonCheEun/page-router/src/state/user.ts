// src/state/user.ts
import { atom } from 'recoil';

export const userNameState = atom<string>({
  key: 'userNameState', // 전역에서 고유해야 함
  default: '',
});