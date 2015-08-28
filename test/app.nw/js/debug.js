
window.onload = main;
function main(){
  // var result  = confirm("are u sure?");
  // alert(result);
  // var result2 = prompt("Input ur name");

 var a = [1,2,3];

  var out = document.getElementById("output");
  //out.innerHTML = Object.print(o);
  try{
    // out.innerHTML = a.forEach.length;
    var content = ""; 
    content += Math.floor(Math.random()*15);
    content += Math.floor(24/5)*15;
    out.innerHTML = content;
  }catch (e){
    alert(e.stack);
  }
}
