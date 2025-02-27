export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user';
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
} 