import { BankAccount  } from './module.js';

// Create instances of BankAccount
const Alice = new BankAccount('Alice', 10000, '123456789');
const Bob = new BankAccount('Bob', 50000, '987654321');

Bob.transfer(200000000, Alice); // Transfer 2000 from Alice to Bob
