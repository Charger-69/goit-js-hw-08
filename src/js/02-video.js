import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const timeFunction = function (data) {
    let playerSecond = data.seconds;
    console.log(playerSecond);
    localStorage.setItem('videoplayer-current-time', playerSecond);
};

player.on('timeupdate', throttle(timeFunction, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        
        default:
            // some other error occurred
            break;
    }
});




// import throttle from "lodash.throttle";

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
// let playerSecond;
// const startVideoSecond = localStorage.getItem('videoplayer-current-time') ?? 0;

// player.setCurrentTime(startVideoSecond)

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.on('timeupdate', function (data) {
//     playerSecond = data.seconds;
//     throttle(localStorage.setItem('videoplayer-current-time', playerSecond), 1000)
//   });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
