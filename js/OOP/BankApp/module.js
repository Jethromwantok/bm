class User {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
  greeting() {
    console.log(`Good day`);
  }
}

class BankAccount extends User {
  constructor(
    name,
    balance,
    accountNumber,
    acctType,
    amount,
    depositCount,
    debtamt
  ) {
    super(name, amount);
    this.accountNumber = accountNumber;
    this.acctType = acctType;
    this.balance = balance;
    this.depositCount = depositCount || 0; // Initialize depositCount to 0 if not provided
    this.debtamt = debtamt || 0; // Initialize debtamt to 0 if not provided

    console.log(
      `Account created for ${this.name} with account number ${this.accountNumber} and initial balance is ${this.balance}`
    );
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `Deposited ${amount}. New balance for ${this.name} is ${this.balance}`
    );
    this.depositCount++;
    console.log(`Total deposits made: ${this.depositCount}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient funds. Current balance is ${this.balance}`);
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
    }
  }
  receive(amount, senderName) {
    this.balance += amount;
    console.log(
      `Received ${amount} from ${senderName}. New balance for ${this.name} is ${this.balance}`
    );
  }

  transfer(amount, recipientAccount) {
    if (amount > this.balance) {
      console.log(
        `Insufficient funds for transfer. Current balance for ${this.name} is ${this.balance}`
      );
    } else {
      this.balance -= amount;
      recipientAccount.receive(amount, this.name);
      console.log(
        `Transferred ${amount} to ${recipientAccount.name}. New balance for ${this.name} is ${this.balance}`
      );
    }
  }

  takeLoan(amount) {
    if (amount > this.balance * 2 && this.depositCount < 5) {
      console.log(
        `You are not eligible for a loan. You must have made at least 5 deposits. At the moment you have made ${this.depositCount} deposits.`
      );

      console.log(
        `Loan amount exceeds twice the current balance. Current balance is ${this.balance}`
      );
    } else {
      this.balance += amount;
      this.debtamt += amount; // Set the debt amount to the loan taken
      console.log(
        `Loan of ${amount} taken. New balance for ${this.name} is ${this.balance}`
      );
      console.log(`You are now owing ${this.debtamt}`);
    }
  }

  chkBalance() {
    console.log(`Current balance for ${this.name} is ${this.balance}`);
  }
}

export { User, BankAccount };
