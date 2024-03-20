export type AuthJwtTokenData = {
  username: string;
  sub: {
    id: number;
    name: string;
    email: string;
    role: string;
    job: string;
    avatar: string;
  },
  iat?: number,
  exp?: number
}

export type AuthRequestData = {
  username: string;
  user: {
    name: string;
    email: string;
    role: string;
    job: string;
    avatar: string;
  };
}