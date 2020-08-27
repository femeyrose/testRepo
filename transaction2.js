class Bank {
  static accDetails() {

    var details = {
      1001: { name: "user1", age: 12, pin: 1001, password: "1234*#%a", balance: 1000 },
      1002: { name: "user2", age: 12, pin: 1002, password: 1235, balance: 1000 },
      1003: { name: "user3", age: 12, pin: 1003, password: 1236, balance: 1000 },
      1004: { name: "user4", age: 12, pin: 1004, password: 1237, balance: 1000 },
      1005: { name: "user5", age: 12, pin: 1005, password: 1238, balance: 1000 },

    }
    return details

  }

  static login() {

    var acno = document.querySelector("#accno").value
    var pass = document.querySelector("#pwd").value

    let data = Bank.accDetails();
    if (acno in data) {
      if (pass == data[acno].password) {
        alert("successfull login")
        window.location.href = "user1.html"
      }
      else {
        alert("incorrect login")
      }
    }
    else {
      //alert("user doesn't exists")
      try {
        if (isNaN(acno)) throw "user doesn't exists"
        if (acno.length < 6) throw "check the length of the acc number"
      }
      catch (err) {
        alert(err)
      }
    }

  }

  static deposit() {
    var pinnum = document.querySelector("#pin").value
    var amt = Number(document.querySelector("#amount").value)
    var acno2 = document.querySelector("#acno").value
    let data = Bank.accDetails()

    if (acno2 in data) {
      var pin1 = data[acno2].pin
      if (pinnum== pin1){
      data[acno2].balance += amt
      alert("credicted")
      alert(data[acno2].balance)
      
      }
    }
  }
  static withdraw(){
    var pinnum = document.querySelector("#pin2").value
    var amt = Number(document.querySelector("#amount2").value)
    var acno3 = document.querySelector("#acno2").value
    let data = Bank.accDetails()

    if (acno3 in data) {
      var pin1 = data[acno3].pin
      if (pinnum== pin1){
      data[acno3].balance -= amt
      alert("debited")
      alert(data[acno3].balance)
      
      }
    }

  }
}













clk = () => {

  window.location.href = "depo.html"

}

withclk = () => {
  window.location.href = "withdraw.html"

}




