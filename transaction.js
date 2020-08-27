class Bank {
    static getAccountDetails() {
        var accountDetails = {
            1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000 },
            1002: { name: "user2", acno: 1002, pin: 1234, password: "usertwo", balance: 3000 },
            1003: { name: "user3", acno: 1003, pin: 1235, password: "userthree", balance: 3000 },
            1004: { name: "user4", acno: 1004, pin: 1236, password: "userfour", balance: 3000 },
            1005: { name: "user5", acno: 1005, pin: 1237, password: "userfive", balance: 3000 }


        }
        return accountDetails

    }

    static login() {
        var acno = document.querySelector("#accno").value
        var password = document.querySelector("#pwd").value
try{
    if(isNaN(acno)) throw "not a valid account number" //if eg:acno=a, this is not and accnum and also <2
    //only the first occurence exception is thrown
    if(acno.length<2) throw "not valid"
}
catch(err){
    alert(err)
}

        alert(acno + "," + password)


        let data = Bank.getAccountDetails()
        var pwd1 = data[acno].password
        alert(pwd1);
        if (acno in data) {

            if (pwd1 == password) {
                alert("login successfull")
                window.location.href = "userone.html"
            }
            else {
                alert("incorrect username and password")
            }
        }
        else {
            alert("user doesn't exists")
        }

    }
    static deposit(){
        alert("deposit")
        var accnum=document.querySelector("#acno").value
        var pinnum=document.querySelector("#pin").value
        var amount=Number(document.querySelector("#amount").value)
        var data=Bank.getAccountDetails();
     if(accnum in data){
         let mpin=data[accnum].pin;
         if(pinnum==mpin){
             data[accnum].balance+=amount;
             alert("account has been credited")
             alert(Num(data[accnum].balance))
         }
     }

    }

}

    // static method helps to call using the Bank.login() directly otherwise we have to create object

