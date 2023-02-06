let day = document.querySelector('.days')
let hour = document.querySelector('.hours')
let minute = document.querySelector('.minutes')
let second = document.querySelector('.seconds')

document.addEventListener('DOMContentLoaded', function() {
    let birthday = new Date(2023, 06, 16)
    let timerId = null

    function countdownTimer() {
        let diff = birthday - new Date()

        if (diff <= 0) {
            clearInterval(timerId);
        }
        
        let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0
        let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0
        let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0
        let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0

        day.innerHTML = `${days} <span>days</span>`
        hour.innerHTML = `${hours} <span>hours</span>`
        minute.innerHTML = `${minutes} <span>minutes</span>`
        second.innerHTML = `${seconds} <span>seconds</span>`
    }

    countdownTimer()

    timerId = setInterval(countdownTimer, 1000);
})
