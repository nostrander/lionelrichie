window.onload = function() {
   document.getElementById("rotateVideo").onclick=pausePlayAnimVid;
}

function pausePlayAnimVid() {
   if (document.getElementById("rotateVideo").checked) {
      document.getElementsByTagName("video")[0].play();
      document.getElementsByTagName("video")[0].loop=true;      
   } else {
      document.getElementsByTagName("video")[0].pause();
      document.getElementsByTagName("video")[0].loop=false;      
   }
}