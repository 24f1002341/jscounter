document.getElementById("display").value = Number(0);

document.getElementById("inc").onclick = function(){
  document.getElementById("display").value = Number(document.getElementById("display").value)+1
}

document.getElementById("reset").onclick=function(){
  document.getElementById('display').value=Number(0);
}
document.getElementById("dec").onclick=function(){
  document.getElementById('display').value= Number(document.getElementById('display').value)-1;
}

