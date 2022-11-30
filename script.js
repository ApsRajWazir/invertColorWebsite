function invertColor() {
  var box= document.getElementById('button');
  var root= document.body;
  
  if(root.style.backgroundColor=="black"){
      root.style.backgroundColor="white";
      box.style.backgroundColor="black";
      box.style.color="white";
  }
      
 else{
    root.style.backgroundColor="black";
    box.style.backgroundColor="white";
    box.style.color="black";
  }
  
}
      
  



