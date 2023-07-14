function calculate(){
    document.getElementById("calc").value=eval(document.getElementById("calc").value);
    
   }
   function clearkeys(){
    document.getElementById("calc").value ="";
   }
   function key(keychar){
    document.getElementById("calc").value +=keychar;
   }