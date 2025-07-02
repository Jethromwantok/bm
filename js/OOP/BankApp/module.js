class User {
    constructor(name, amount){
        this.name = name;
        this.amount = amount;
        
    }
        greeting(){
            console.log(`Good day`);
            

        }
        
    }

class BankAccount extends User {
    constructor(name, amount, accountNumber){
        super(name, amount);
        this.accountNumber = accountNumber;
    }

    deposit(amount){
        this.amount += amount;
        console.log(`Deposited ${amount}. New balance for ${this.name} is ${this.amount}`);
    }

    withdraw(amount){
        if (amount > this.amount) {
            console.log(`Insufficient funds. Current balance is ${this.amount}`);
        } else {
            this.amount -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.amount}`);
        }
    }
    receive(amount, senderName) {
        this.amount += amount;
        console.log(`Received ${amount} from ${senderName}. New balance for ${this.name} is ${this.amount}`);
    }

    transfer(amount, recipientAccount) {
        if (amount > this.amount) {
            console.log(`Insufficient funds for transfer. Current balance for ${this.name} is ${this.amount}`);
        } else {
            this.amount -= amount;
            recipientAccount.receive(amount, this.name);
            console.log(`Transferred ${amount} to ${recipientAccount.name}. New balance for ${this.name} is ${this.amount}`);
        }
    }



    chkBalance() {
        console.log(`Current balance for ${this.name} is ${this.amount}`);
    }
}

export { User, BankAccount };