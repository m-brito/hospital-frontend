export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  role: string;
  token: string;
  exp: number;
  iat: number;
}
