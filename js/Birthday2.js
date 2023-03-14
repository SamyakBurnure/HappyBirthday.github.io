
window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];

  function stepClass(step) {
    merrywrap.className = 'merrywrap';
    merrywrap.className = 'merrywrap step-' + step;
  }
  function openBox() {
      stepClass(step);
    if (step === 4) {
      reveal();
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }
  openBox();
};

function reveal() {
  document.querySelector('.merrywrap').style.backgroundColor = 'transparent';
  var w, h;
  if (window.innerWidth >= 1000) {
    w = 295;h = 185;
  } else
  {
    w = 255;h = 155;
  }
}

chain = document.getElementById("chain");
chain.onended = function() {
  setTimeout(() => {
    window.location.href='../html/BirthdayGame.html';
  },1000);
};