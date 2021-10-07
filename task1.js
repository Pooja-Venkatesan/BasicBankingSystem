document.getElementById("viewButton").onclick = function () {
    location.href = "customers.html";
};

document.getElementById("transButton").onclick = function() {
    location.href="TransferForm.html";
};

 

function send()
{
var empt = document.forms["form1"]["text1"].value;
if (empt == "")
{
    alert('error please fill all fields!');
}
      else if (confirm("Confrim to make transaction!")) {
    txt = "You pressed OK!";
    alert("Transaction Successful!")
    location.href="history.html";
}

else {
    txt = "You pressed Cancel!";
    alert("Transaction Cancelled!")
    location.href="history.html";
  }

};