function getFormvalue() {
   var first = document.getElementById('firstname').value;
   var last = document.getElementById('lastname').value;
   if (first == ""){
      alert("Enter your first Name");
   } else if(last == ""){
      alert("Enter your last Name");
   } else {
      alert("First Name: " + first + "\nLast Name: " + last);
   }
}
