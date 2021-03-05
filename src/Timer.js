import View from './View'

const Timer = {
    time: 5 ,
    currentTime: 0,
    interval: null,
    init() {
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)
    },
    countdown() {
        Timer.currentTime = Timer.currentTime - 1
        if(Timer.currentTime === 0) {
            clearInterval(Timer.interval)
        }
        console.log(Timer.currentTime);
    }
}

export { Timer }