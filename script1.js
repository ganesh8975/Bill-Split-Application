function splitBill() {
    let amount = document.getElementById("amount").value;
    let persons = document.getElementById("persons").value;
    
    let result = amount / persons;

    document.getElementById("result").innerText = " Result: ₹" + result.toFixed(2) + " Per Person";
}