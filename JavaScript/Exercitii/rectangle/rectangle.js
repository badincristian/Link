 

 var rectangle = document.querySelector("div");

 function minimize() {
     var computedStyle = window.getComputedStyle(rectangle);
     current = computedStyle.height;
     console.log(rectangle.className);
     var n = current.substring(0, current.length - 2);
     n = Math.round(n);
     var newer = --n + "px"; 
     console.log (n);
     rectangle.style.height = newer;
     setTimeout(minimize, 50);
     if (n>0){
        setTimeout(minimize, 50);

     }
 }
 minimize();