<!DOCTYPE html>
<html>
<body>
<center>
<h1>Alphabetical Order</h1>

<h1><input type="text" id="typeInput" style="height: 20px;width: 100px;"></h1>
<button  style="height: 25px;width: 50px;" onclick="press()">Convert</button>

<h1>Expected Ouput: </h1>
<h1 id="answer"></h1>

</center>



<script>


function press(){
    
    let a=document.getElementById('typeInput').value;
function sortString(a){
//   var arr = a.split('');
//   var sorted = arr.sort();
//   return sorted.join('');
  return a.split('').sort().join('');
}
    document.getElementById("answer").innerHTML =sortString(a);
}



</script>

</body>
</html>
