type Title = 'Mr' | 'Mrs';

function greet(
  name: string = 'unknown',
  address: string,
  title?: Title
): string {
  if (title)
    return `Hello, ${title}. ${name} with address : ${address}. My Pleasure...`;
  return `Hello, ${name} with address : ${address}`;
}

console.log(greet('Ucup', 'Jl Untung Jawa', 'Mr'));
console.log(greet('Ucup', 'Jl Untung Jawa'));

function tambah(a: number, b: number): number {
  return a + b;
}

console.log(tambah(1, 2));

function tampilkanTeks(teks: string): void {
  console.log(teks);
}

tampilkanTeks('lorem ipsum dolor');

function biodata(name: string, age: number) {
  console.log(name, age);
  return name;
}
console.log(biodata('Ucup', 20));

const kali = (a: number, b: number): number => {
  return a * b;
};

type Calculator = (a: number, b: number) => number;

const tambahOperator: Calculator = (a, b) => {
  return a + b;
};
const kurangOperator: Calculator = (a, b) => {
  return a - b;
};
const bagiOperator: Calculator = (a, b) => {
  return a / b;
};

type Student = {
  name: string;
  age: number;
};

function showStudent(student: Student): void {
  console.log(student.name);
  console.log(student.age);
}

showStudent({
  name: 'Ucup',
  age: 20,
});

function createStudent(name: string, age: number): Student {
  return {
    name: name,
    age: age,
  };
}

console.log(createStudent('Ucup', 20));
