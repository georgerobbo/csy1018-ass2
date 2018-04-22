var interval = [];

/*function rndnumgen()

{

     rndnum[0] = Math.random();
     rndnum[1] = Math.random();
     rndnum[2] = Math.random();
     rndnum[3] = Math.random();

}

*/

function horseRight1() {

    // rndnumgen();

    var rdnnum = Math.random();

    var element = document.getElementById('horse1');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + rdnnum + 'px';
    element.className = 'horse runRight';

    if (positionLeft >= window.innerWidth / 9.9 * 8) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseUp1, 1);

    }

}

function horseRight2() {

    // rndnumgen();

    var rdnnum = Math.random();

    var element = document.getElementById('horse2');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + rdnnum + 'px';
    element.className = 'horse runRight';

    if (positionLeft >= window.innerWidth / 10.2 * 8) {
        clearInterval(interval[1]);
        interval[1] = setInterval(horseUp2, 1);

    }

}

function horseRight3() {

    // rndnumgen();

    var rdnnum = Math.random();

    var element = document.getElementById('horse3');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + rdnnum + 'px';
    element.className = 'horse runRight';

    if (positionLeft >= window.innerWidth / 10.5 * 8) {
        clearInterval(interval[2]);
        interval[2] = setInterval(horseUp3, 1);

    }

}

function horseRight4() {

    //rndnumgen();

    var rdnnum = Math.random();

    var element = document.getElementById('horse4');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + rdnnum + 'px';
    element.className = 'horse runRight';

    if (positionLeft >= window.innerWidth / 10.8 * 8) {
        clearInterval(interval[3]);
        interval[3] = setInterval(horseUp4, 1);

    }

}

function horseUp1() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse1');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - rdnnum + 'px';
    element.className = 'horse runUp';

    if (positionTop <= window.innerHeight / 29 * 5) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseLeft1, 1);

    }
}

function horseUp2() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse2');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - rdnnum + 'px';
    element.className = 'horse runUp';

    if (positionTop <= window.innerHeight / 29 * 4) {
        clearInterval(interval[1]);
        interval[1] = setInterval(horseLeft2, 1);

    }
}

function horseUp3() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse3');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - rdnnum + 'px';
    element.className = 'horse runUp';

    if (positionTop <= window.innerHeight / 29 * 3) {
        clearInterval(interval[2]);
        interval[2] = setInterval(horseLeft3, 1);

    }
}

function horseUp4() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse4');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - rdnnum + 'px';
    element.className = 'horse runUp';

    if (positionTop <= window.innerHeight / 29 * 2) {
        clearInterval(interval[3]);
        interval[3] = setInterval(horseLeft4, 1);

    }
}



function horseLeft1() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse1');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - rdnnum + 'px';
    element.className = 'horse runLeft';

    if (positionLeft <= window.innerWidth / 70 * 8) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseDown1, 1);

    }
}

function horseLeft2() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse2');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - rdnnum + 'px';
    element.className = 'horse runLeft';

    if (positionLeft <= window.innerWidth / 80 * 8) {
        clearInterval(interval[1]);
        interval[1] = setInterval(horseDown2, 1);

    }
}

function horseLeft3() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse3');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - rdnnum + 'px';
    element.className = 'horse runLeft';

    if (positionLeft <= window.innerWidth / 90 * 8) {
        clearInterval(interval[2]);
        interval[2] = setInterval(horseDown3, 1);

    }
}

function horseLeft4() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse4');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - rdnnum + 'px';
    element.className = 'horse runLeft';

    if (positionLeft <= window.innerWidth / 100 * 8) {
        clearInterval(interval[3]);
        interval[3] = setInterval(horseDown4, 1);

    }
}


function horseDown1() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse1');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + rdnnum + 'px';
    element.className = 'horse runDown';

    if (positionTop >= window.innerHeight / 10 * 8) {
        clearInterval(interval[0]);
        interval[0] = setInterval(horseFinish1, 1);
    }
}

function horseDown2() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse2');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + rdnnum + 'px';
    element.className = 'horse runDown';

    if (positionTop >= window.innerHeight / 10.5 * 8) {
        clearInterval(interval[1]);
        interval[1] = setInterval(horseFinish2, 1);
    }
}

function horseDown3() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse3');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + rdnnum + 'px';
    element.className = 'horse runDown';

    if (positionTop >= window.innerHeight / 11 * 8) {
        clearInterval(interval[2]);
        interval[2] = setInterval(horseFinish3, 1);
    }
}

function horseDown4() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse4');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + rdnnum + 'px';
    element.className = 'horse runDown';

    if (positionTop >= window.innerHeight / 11.5 * 8) {
        clearInterval(interval[3]);
        interval[3] = setInterval(horseFinish4, 1);
    }
}


function horseFinish1() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse1');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + rdnnum + 'px';
    element.className = 'horse runRight';

    if (positionLeft >= window.innerWidth / 12 * 3) {
        clearInterval(interval[0]);

        var element = document.getElementById('horse1');
        element.className = 'horse standRight';
    }
}

function horseFinish2() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse2');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + rdnnum + 'px';
    element.className = 'horse runRight';

    if (positionLeft >= window.innerWidth / 12 * 3) {
        clearInterval(interval[1]);

        var element = document.getElementById('horse2');
        element.className = 'horse standRight';
    }
}

function horseFinish3() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse3');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + rdnnum + 'px';
    element.className = 'horse runRight';

    if (positionLeft >= window.innerWidth / 12 * 3) {
        clearInterval(interval[2]);

        var element = document.getElementById('horse3');
        element.className = 'horse standRight';
    }
}

function horseFinish4() {

    var rdnnum = Math.random();

    var element = document.getElementById('horse4');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + rdnnum + 'px';
    element.className = 'horse runRight';

    if (positionLeft >= window.innerWidth / 12 * 3) {
        clearInterval(interval[3]);

        var element = document.getElementById('horse4');
        element.className = 'horse standRight';
    }
}


function myClickEvent() {
    clearInterval(interval[0]);
    interval[0] = setInterval(horseRight1, 0);
    interval[1] = setInterval(horseRight2, 0);
    interval[2] = setInterval(horseRight3, 0);
    interval[3] = setInterval(horseRight4, 0);

}

/*function onclick() {
    document.getElementById("start").disabled = true;
}
*/

function myLoadEvent() {
    var element = document.getElementById('start');
    element.addEventListener('click', myClickEvent);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);