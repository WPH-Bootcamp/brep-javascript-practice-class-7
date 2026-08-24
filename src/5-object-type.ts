type Student = {
  name: string;
  age: number;
  isActive?: boolean;
  phoneNumber?: string;
  address?: {
    kota: '';
    kec: '';
    kel: '';
    kodePOS: '';
  };
  hobby: string[];
};

const student: Student = {
  name: 'Budi',
  age: 20,
  hobby: ['Basket', 'Ngoding', 'Baca Buku'],
};

console.log(student);

const ListStudents: Student[] = [
  { name: 'Budi', age: 20, hobby: ['Basket', 'Ngoding', 'Baca Buku'] },
  { name: 'Ucup', age: 20, hobby: ['Basket', 'Ngoding', 'Baca Buku'] },
  { name: 'Renday', age: 20, hobby: ['Basket', 'Ngoding', 'Baca Buku'] },
];
console.log(ListStudents);
