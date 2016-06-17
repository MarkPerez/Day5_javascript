var event1 = document.getElementById("button1");
event1.addEventListener('click', activate, false);

function activate(){
    var text = document.getElementById("input1").value;
    document.getElementById("demo").innerHTML = text.lastIndexOf("string");
   
    
   
}





