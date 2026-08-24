let id: string | number = '10293810293';
id = 12093182309;

type ID = string | number;
const userId: ID = 100;
console.log(userId);

const productId: ID = 'PRD-109';
console.log(productId);

type Status = 'success' | 'error' | 'loading';
let status: Status = 'success';
status = 'error';
status = 'loading';

function printId(id: string | number) {
  if (typeof id === 'string') console.log(id.toUpperCase());
  if (typeof id === 'number') console.log(id.toFixed());
}
printId('satuduatiga');

function handleStatus(status: Status): void {
  if (status === 'success') {
    console.log('data berhasil diproses');
  } else if (status === 'error') {
    console.log('Terjadi error');
  } else {
    console.log('data masih loading...');
  }
}
handleStatus('success');
