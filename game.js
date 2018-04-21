var interval = [];

function horseRight() {

    var element = document.getElementById('horse1');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 2 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse2');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 2 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse3');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 2 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse4');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 2 + 'px';
    element.className = 'horse runRight';

    if (positionLeft >= window.innerWidth / 10.5*8) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseUp, 1);

    }
    
}

function horseLeft() {

    var element = document.getElementById('horse1');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 2 + 'px';
    element.className = 'horse runLeft';

    var element = document.getElementById('horse2');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 2 + 'px';
    element.className = 'horse runLeft';

    var element = document.getElementById('horse3');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 2 + 'px';
    element.className = 'horse runLeft';

    var element = document.getElementById('horse4');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 2 + 'px';
    element.className = 'horse runLeft';

    if (positionLeft <= window.innerWidth / 100*8) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseDown, 1);

    }
}

function horseUp() {

    var element = document.getElementById('horse1');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 2 + 'px';
    element.className = 'horse runUp';

    var element = document.getElementById('horse2');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 2 + 'px';
    element.className = 'horse runUp';

    var element = document.getElementById('horse3');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 2 + 'px';
    element.className = 'horse runUp';

    var element = document.getElementById('horse4');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 2 + 'px';
    element.className = 'horse runUp';

    if (positionTop <= window.innerHeight / 29*5) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseLeft, 1);

    }
}

function horseDown() {

    var element = document.getElementById('horse1');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 2 + 'px';
    element.className = 'horse runDown';

    var element = document.getElementById('horse2');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 2 + 'px';
    element.className = 'horse runDown';

    var element = document.getElementById('horse3');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 2 + 'px';
    element.className = 'horse runDown';

    var element = document.getElementById('horse4');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 2 + 'px';
    element.className = 'horse runDown';

    if (positionTop >= window.innerHeight / 10*8) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseEdge, 1);

    }

}

function horseEdge() {
    var element = document.getElementById('horse1');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 2 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse2');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 2 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse3');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 2 + 'px';
    element.className = 'horse runRight';

    var element = document.getElementById('horse4');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 2 + 'px';
    element.className = 'horse runRight';


    if (positionLeft >= window.innerWidth / 15*3) {
        clearInterval(interval[0]);

        var element = document.getElementById('horse1');
        element.className = 'horse standRight';

        var element = document.getElementById('horse2');
        element.className = 'horse standRight';

        var element = document.getElementById('horse3');
        element.className = 'horse standRight';

        var element = document.getElementById('horse4');
        element.className = 'horse standRight';
      }
}


function myClickEvent() {
    clearInterval(interval[0]);
    interval[0] = setInterval(horseRight, 0);
}

function myLoadEvent() {
    var element = document.getElementById('start');
    element.addEventListener('click', myClickEvent);


}
document.addEventListener('DOMContentLoaded', myLoadEvent);