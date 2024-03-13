export type AuthJwtTokenData = {
  username: string;
  sub: {
    id: number;
    name: string;
    email: string;
    role: string;
    job: string;
    avatar: string;
  };
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