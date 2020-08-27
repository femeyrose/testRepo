var accountDetails={ 
1001:{name:"user1",acno:1001,pin:4387,password:"userone",balance:3000}, 
1002:{name:"user2",acno:1002,pin:1234,password:"usertwo",balance:3000},
1003:{name:"user3",acno:1003,pin:1235,password:"userthree",balance:3000},
1004:{name:"user4",acno:1004,pin:1236,password:"userfour",balance:3000},
1005:{name:"user5",acno:1005,pin:1237,password:"userfive",balance:3000}


}



if(1001 in accountDetails){
    console.log(accountDetails[1001].name)
    //or console.log(accountDetails[1001]["name"])
    console.log(accountDetails[1001].balance)
}
