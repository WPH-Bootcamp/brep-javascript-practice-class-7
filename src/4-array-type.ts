const studentsList: string[] = ['Budi', 'Ucup', 'Renday'];
console.log(studentsList);
studentsList.push('Sari');

const studentsScore: number[] = [10, 20, 30];
console.log(studentsScore);

const isAccountActive: boolean[] = [true, false, true, false];

const mentorList: Array<string> = ['Dicky', 'Henry', 'Vincent'];
console.log(mentorList);

const nilai: (string | number | boolean)[] = ['Renday', 10, true];
console.log(nilai);

type UserListType = {
  id: number;
  name: string;
  age: number;
};

const usersList: UserListType[] = [
  { id: 1, name: 'Ucup', age: 20 },
  { id: 2, name: 'Renday', age: 20 },
  { id: 3, name: 'Budi', age: 20 },
];
console.log(usersList);

const roles: string[] = ['student', 'mentor', 'admin'];

console.log(roles);
