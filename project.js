
function myFunction() {
  var bsm=document.getElementById("byd")
  var swm=document.getElementById("bud")
  var bmc=document.getElementById("bod")
  var wmc=document.getElementById("bid")
  var b8 =document.getElementById("dap")
  var w7 =document.getElementById("dak")
  var m8 =document.getElementById("dab")
  var b7 =document.getElementById("deb")
  var check1= document.getElementById("whites");
  var check1a=document.getElementById("blacks")
  var check2= document.getElementById("mercedess")
  var check2a=document.getElementById("bmws")
  var check3= document.getElementById("sports")
  var check3a=document.getElementById("lexurys")
  if (check1a.checked == true && check2a.checked == true && check3a.checked == true ){
    b7.style.display = "block";
  } 
  else if (check1.checked == true && check2a.checked == true && check3.checked == true){
    m8.style.display = "block";
    }
    else if (check1.checked == true && check2a.checked == true && check3a.checked == true){
    	w7.style.display = "block";
    }
    else if (check1a.checked == true && check2a.checked == true && check3.checked == true){
    	b8.style.display = "block";
    }
    else if (check1.checked == true && check2.checked == true && check3a.checked == true){
    	wmc.style.display = "block";
    }
    else if (check1a.checked == true && check2.checked == true && check3a.checked == true){
    	bmc.style.display = "block";
    }
    else if (check1.checked == true && check2.checked == true && check3.checked == true){
    	swm.style.display = "block";
    }
    else if (check1a.checked == true && check2.checked == true && check3.checked == true){
    	bsm.style.display = "block";
    }

    else {
    	bsm.style.display = "none";
    }
  }








