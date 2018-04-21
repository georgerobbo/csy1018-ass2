var interval = [];

function horseUp() {
    var element = document.getElementById('horse1');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 1 + 'px';
    element.className = 'horse runUp';

    var element = document.getElementById('horse2');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 1 + 'px';
    element.className = 'horse runUp';

    var element = document.getElementById('horse3');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 1 + 'px';
    element.className = 'horse runUp';

    var element = document.getElementById('horse4');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 1 + 'px';
    element.className = 'horse runUp';

    if (positionTop <= window.innerHeight / 100*15) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseRightend, 1);
    }
}

function horseDown() {
    var element = document.getElementById('horse1');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 1 + 'px';
    element.className = 'horse runDown';

    var element = docu ment.getElementById('horse2');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 1 + 'px';
    element.className = 'horse runDown';

    var element = document.getElementById('horse3');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 1 + 'px';
    element.className = 'horse runDown';

    var element = document.getElementById('horse4');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 1 + 'px';
    element.className = 'horse runDown';

    if (positionTop > window.innerHeight / 10 * 8 ) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseleft, 1);
    }
}


function horseRight() {
    var element = document.getElementById('horse1');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
    element.className = 'horse runRight';


    var element = document.getElementById('horse2');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse3');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse4');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
    element.className = 'horse runRight';


    if (positionLeft > window.innerWidth / 10*8) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horsedown, 1);

    }
}


function horseLeft() {
    var element = document.getElementById('horse1');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 1 + 'px';
    element.className = 'horse runLeft';

    var element = document.getElementById('horse2');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 1 + 'px';
    element.className = 'horse runLeft';

    var element = document.getElementById('horse3');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 1 + 'px';
    element.className = 'horse runLeft';

    var element = document.getElementById('horse4');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 1 + 'px';
    element.className = 'horse runLeft';


    if (positionLeft <= window.innerWidth / 100*5) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseup, 1);
    }
}


function horseEdge() {
    var element = document.getElementById('horse1');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse2');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse3');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse4');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
    element.className = 'horse runRight';


    if (positionLeft > window.innerWidth / 10*3) {
        clearInterval(interval[0]);
        var element = document.getElementById('horse1');
        element.className = 'horse standRight';
        var element = document.getElementById('horse2');
        element.className = 'horse standRight';
        var element = document.getElementById('horse3');
        element.className = 'horse standRight';
        var element = document.getElementById('horse4');
        element.className = 'horse standRight';
        var restart = document.getElementById('start');
        restart.addEventListener('click', beginRace);
      }
}

function beginRace(){
  var element = document.getElementById('horse1');
  element.style.left = window.innerWidth / 10 * 2 + 'px';
  var element = document.getElementById('horse2');
  element.style.left = window.innerWidth / 10 * 2 + 'px';
  var element = document.getElementById('horse3');
  element.style.left = window.innerWidth / 10 * 2 + 'px';
  var element = document.getElementById('horse4');
  element.style.left = window.innerWidth / 10 * 2 + 'px';
  }



function myStartEvent() {
    clearInterval(interval[0]);
    interval[0] = setInterval(horseRight, 0);
}

function myLoadEvent() {
    var element = document.getElementById('start');
    element.addEventListener('click', myStartEvent);


}
document.addEventListener('DOMContentLoaded', myLoadEvent);
