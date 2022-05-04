export interface LoginForm {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
}

export interface Notification {
  isShow: boolean;
  type: string;
  message: string;
}
