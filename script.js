'use strict';

const timeDisplay = document.querySelector('.time');
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');

const countDownTimer = function (time) {
  const tick = function () {
    console.log('a');
    let hour = String(Math.trunc(time / 3600)).padStart(2, 0);
    let min = String(Math.trunc((time % 3600) / 60)).padStart(2, 0);
    let sec = String(Math.trunc(time % 60)).padStart(2, 0);

    // console.log(`${hour}:${min}:${sec}`);
    timeDisplay.innerHTML = `${hour}:${min}:${sec}`;

    time++;
  };

  tick();
  const timer = setInterval(tick, 1000);
};

// btnStart.addEventListener('click', countDownTimer(0));
