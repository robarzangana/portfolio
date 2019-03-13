function progressBar() {
    var elem1 = document.getElementById("jsBar1");
    var elem2 = document.getElementById("jsBar2");  
    var elem3 = document.getElementById("jsBar3"); 
    var elem4 = document.getElementById("jsBar4");  
    var elem5 = document.getElementById("jsBar5"); 
    var elem6 = document.getElementById("jsBar6");
    var elem7 = document.getElementById("jsBar7");
    var width1 = 10;
    var width2 = 10;
    var width3 = 10;
    var width4 = 10;
    var width5 = 10;
    var width6 = 10;
    var width7 = 10;
    var id1 = setInterval(frame1, 30);
    var id2 = setInterval(frame2, 30);
    var id3 = setInterval(frame3, 30);
    var id4 = setInterval(frame4, 30);
    var id5 = setInterval(frame5, 30);
    var id6 = setInterval(frame6, 30);
    var id7 = setInterval(frame7, 30);
    function frame1() {   // Java
      if (width1 >= 70) {
        clearInterval(id1);
      } else {
        width1++; 
        elem1.style.width = width1 + '%'; 
        elem1.innerHTML = width1 * 1  + '%';
      }
    }
    function frame2() {
      if (width2 >= 70) { // C++
          clearInterval(id2);
        } else {
          width2++; 
          elem2.style.width = width2 + '%'; 
          elem2.innerHTML = width2 * 1  + '%';
        }
    }
    function frame3() {
      if (width3 >= 40) { // Python
          clearInterval(id3);
        } else {
          width3++; 
          elem3.style.width = width3 + '%'; 
          elem3.innerHTML = width3 * 1  + '%';
        }
    }
    function frame4() {
      if (width4 >= 20) { //Javascript
        clearInterval(id4);
      } else {
        width4++; 
        elem4.style.width = width4 + '%'; 
        elem4.innerHTML = width4 * 1  + '%';
      }
    }
    function frame5() {
      if (width5 >= 90) { // HTML
        clearInterval(id5);
      } else {
        width5++; 
        elem5.style.width = width5 + '%'; 
        elem5.innerHTML = width5 * 1  + '%';
      }
    }
  
    function frame6() {   // CSS
      if (width6 >= 70) {
        clearInterval(id6);
      } else {
        width6++; 
        elem6.style.width = width6 + '%'; 
        elem6.innerHTML = width6 * 1  + '%';
      }
    }

    function frame7() {   // Github
        if (width7 >= 60) {
          clearInterval(id7);
        } else {
          width7++; 
          elem7.style.width = width7 + '%'; 
          elem7.innerHTML = width7 * 1  + '%';
        }
      }
  
  }