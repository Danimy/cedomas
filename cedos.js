<script>
  document.addEventListener('DOMContentLoaded', function() {
   if(typeof getCookie('cinsys') == 'undefined'){
   
    setCookie('cinsys' , 'true' , 1);
    setTimeout(function(){
     document.getElementById("csen").style.opacity = "1";
    } , 3000);  //waktu 3 menit tampil
   }
  });

  function setCookie(cname, cvalue, exdays) {
     var d = new Date();
     d.setTime(d.getTime() + (exdays*24*60*60*1000));
     var expires = "expires="+d.toUTCString();
     document.cookie = cname + "=" + cvalue + "; " + expires;
 }
 function getCookie(name) {
   var value = "; " + document.cookie;
   var parts = value.split("; " + name + "=");
   if (parts.length == 2) {
       document.getElementById("csen").remove()
     return parts.pop().split(";").shift();
    }
 }
</script>
