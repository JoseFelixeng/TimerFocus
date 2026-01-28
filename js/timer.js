import sounds from "./sounds.js"


export default function Timer({minutesDisplay, secondsDisplay, resetControls}){

    let timerTimerOut
    let minutes = Number(minutesDisplay.textContent)

    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimerOut)
    }

    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds 
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function hold(){
        clearTimeout(timerTimerOut)
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function countDown(){
        timerTimerOut = setTimeout(function(){
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateDisplay(minutes, 0)


            if (minutes <= 0 && seconds <= 0){
                resetControls()
                updateDisplay()
                sounds().timeEnd()
                return;
            }

            if (seconds <= 0){
                seconds = 60
                --minutes
            }


            //secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
            updateDisplay(minutes, String(seconds-1))

            countDown()

        }, 1000)

    }

    return { countDown, reset, updateDisplay, updateMinutes, hold }
}