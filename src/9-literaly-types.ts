type Theme = 'dark' | 'light';
const tema: Theme = 'dark';
console.log(tema);

type Rating = 1 | 2 | 3 | 4 | 5;
const movieRate: Rating = 2;
console.log(movieRate);

type AlwaysTrue = true;
const trueAja: AlwaysTrue = true;
console.log(trueAja);

type User = {
  name: string;
  role: 'student' | 'mentor';
};
const student: User = {
  name: 'Ucup',
  role: 'student',
};
console.log(student);

type Status = 'success' | 'error';
const status: Status = 'success';

const config = {
  theme: 'Light',
} as const;
console.log(config);

config.theme = 'Light';
console.log(config);
