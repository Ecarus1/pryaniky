interface AuthState {
  token: string,
  waiting: boolean
}

export interface RootState {
  auth: AuthState;
}
