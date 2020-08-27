//exception Handling

//no syntax error when we type
var data="hello"
console.log(data.toUpperCase())

//but if we give, 
// var data=10;
// console.log(data.toUpperCase())
//this willn't show instead it will show only compile time
//the o/p will be shown upto this only (stops running after this)
//exception is not an error
//program flow will be terminated
//eg:on the way to school traffic block

//eg:program
// var data=10;
// console.log(data.toUpperCase()) //10.toUpperCase()  this is a predefined exception

//we  need to reach the school => we have run the remaining part of the prgm
//for the normal operation=> to handle this properly we use exception handling
//using try and catch

//in try{
    //doubtful code is given
//}

//in catch{
    //handling code => to handle the situation
//}

try{

    var data=10
    console.log(data.toUpperCase())
}
catch(err){
    //console.log("exception occured")
    //console.log(err.name) // o/p =>TypeError
    console.log(err.message) //o/p =>data.toUpperCase is not a function
}


//for customized exception
//eg:age<18

try{
    var age=18;
    if(age<19) throw "invalid age" //customized exception
}
catch(er){
    console.log(er)
}

//used in login.html page
//accnum should be number other wise exception
//for each case we have to use separate try-catch block

try{
    var num=3
    if(num%2!=0) throw "just try"

}
catch(err){
console.log(err)

}
