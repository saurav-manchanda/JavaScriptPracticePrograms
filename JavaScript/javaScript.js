var BankAccount={
    accNumber:12345,
    accBal:2500,
    accHolder:"Saurav Manchanda",
    withdraw: function(withdrawAmmount){
            this.accBal=this.accBal-withdrawAmmount;
            console.log("The account balance left: "+this.accBal) 
          
    },
    deposit: function(depositAmount){
        this.accBal=this.accBal +depositAmount;
        console.log("The account balance is: "+this.accBal);
    }
}

var currentAccount=Object.create(BankAccount);
currentAccount.odLimit=500;
currentAccount.withdraw=function(withdrawAmmount){
    this.accBal=this.accBal-withdrawAmmount;
    if(this.accBal< -500){
        console.log("Sorry even your odlimit is passed!! Not sufficient balance");
    }
    else{
        console.log("The account balance left: "+this.accBal);
    }
}

var savingsAccount=Object.create(BankAccount);
savingsAccount.isSalaryAccount=true;
savingsAccount.withdraw=function(withdrawAmmount){
    this.accBal=this.accBal-withdrawAmmount;
    if(this.accBal< 0){
        console.log(" Not sufficient balance");
    }
    else{
        console.log("The account balance left: "+this.accBal);
    }
}

currentAccount.withdraw(3500);
currentAccount.deposit(1000);
savingsAccount.withdraw(1000); 
savingsAccount.deposit(2400);
