document.getElementById("viewButton").onclick = function () {
    location.href = "customers.html";
};

document.getElementById("transButton").onclick = function() {
    location.href="transfer.html";
};


function send() {
        
    if (confirm("Confrim to make transaction!")) {
        txt = "You pressed OK!";
        alert("Transaction Successful!")
    }else {
        txt = "You pressed Cancel!";
        alert("Transaction Cancelled!")
      }
    
    location.href="history.html";
};