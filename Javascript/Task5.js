<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body><center>
    <h1>Reverse a number</h1>
    
    <input id='inputUser' type='number'>
    <button id="check">calculate</button>
    <h1 id='result'></h1>
   
</center>
<script>


document.getElementById('check').addEventListener('click',()=>{
    let   a=document.getElementById('inputUser').value;
    
const reverse = (a) => parseInt(String(a)
.split("")
.reverse()
.join(""), 10);
    document.getElementById('result').innerHTML=reverse(a);

}
);

    

</script>
</body>

</html>
