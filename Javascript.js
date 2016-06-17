var event1 = document.getElementById("button1");
event1.addEventListener('click', activate, false);

function activate(){
    var text = document.getElementById("input1").value;
    document.getElementById("demo").innerHTML = text.slice(7,8);
    document.getElementById("demo1").innerHTML = text.slice(7,11);
    
   
}





