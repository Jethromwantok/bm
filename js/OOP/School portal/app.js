import {Account, Admin, Staff, Student } from './module.js';

const admin = new Admin("Alice", "alice1@gmail.com", 8012323212);

console.log(admin.login());
