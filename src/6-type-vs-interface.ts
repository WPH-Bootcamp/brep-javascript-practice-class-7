type UserType = {
  name: string;
  age: number;
};

type AdminType = UserType & {
  phoneNumber: string;
};

type Status = 'success' | 'error';
type UserId = number;

const status: Status = 'success';
console.log(status);

interface UserInterface {
  name: string;
  age: number;
}

interface UserInterface {
  address: string;
}

interface AdminInterface extends UserInterface {
  phoneNumber: string;
}

const admin: AdminInterface = {
  name: 'Ucup',
  age: 20,
  address: 'Jl Untung Jawa',
  phoneNumber: '0192380912830',
};
console.log(admin)