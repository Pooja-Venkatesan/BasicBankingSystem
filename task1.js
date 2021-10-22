document.getElementById("viewButton").onclick = function () {
    location.href = "customers.html";
};

document.getElementById("transButton").onclick = function() {
    location.href="TransferForm.html";
};


function required()
{
var empt = document.forms["form1"]["text1"].value;
if (empt == "")
{
alert("Please fill the required fields");
return false;
}
else if (empt != "") {  
confirm("Confrim to make transaction!");
alert("Transaction Successful!");
location.href="history.html";
}
};

