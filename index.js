var i=0;
var fname=Array();
function save(){
    document.getElementById("user").innerHTML="Friend: "+ "<br>";
    fname[i]=document.getElementById("friendName").value;
    i++;
    document.getElementById("friendName").value="";
    document.getElementById("user").innerHTML+=fname;
    document.getElementById("heading").innerHTML="Who will pay?";
}

function whoWillPay(){
    var nofPeople=fname.length;
    var randomPosition=Math.floor(Math.random()* nofPeople);
    var randomFriend=fname[randomPosition];
    return randomFriend + " will pay the bill!";
}
document.getElementById("select").addEventListener("click",myFunction);

function myFunction() {
    if(fname.length==0){
        document.getElementById("heading").innerHTML="Invalid data. Please enter the name first!!";
    }
    else{
        document.getElementById("heading").innerHTML=whoWillPay();
    }
    
}