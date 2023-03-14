var animateButton = function(e) {

    e.preventDefault;
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
      window.location.href='html/Birthday1.html';
    },700);
  };
  
  var btn = document.getElementById("btn");

  btn.addEventListener('click',animateButton,false);


  
