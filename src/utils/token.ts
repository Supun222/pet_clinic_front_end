/* eslint-disable prettier/prettier */
const TOKEN_KEY = 'jwt_token';

export const getToken = (): string | null => { return localStorage.getItem(TOKEN_KEY);}

export const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};
