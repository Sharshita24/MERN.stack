<!DOCTYPE html>
<html>
<head>
<style> 
div#output{
   height: 50px;
   width: 50px;
   padding-top: 50px;
    position: relative;
  animation: mymove 3.5s infinite;
  animation-play-state: paused;

}
h1{
    color: rgb(43, 25, 123);
}

@keyframes mymove {
  from {left: 0px;}
  to {left: 100%;}
}
</style>
<div id="output"><img src="Screenshot (1516).png" alt=""></div>
<div class="container" style="padding-top: 200px;">
<center>
<h1>Click the following button to handle animation</h1>
<button  style='height:25px;width:70px'onclick="playing()">Play</button>
<button  style='height:25px;width:70px'onclick='pausing() '>Pause</button>
</center>
</div>


<script>
function playing() {
  document.getElementById("output").style.animationPlayState = "running";
}

function pausing() {
  document.getElementById("output").style.animationPlayState = "paused";
}




</script>


</body>
</html>
