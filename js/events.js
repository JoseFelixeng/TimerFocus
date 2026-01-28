import {btnPlay, btnPause, btnSet, btnStop, btnSoundOff, btnSoundOn} from "./elements.js"

export default function({controls, timer, sound}){
    btnPlay.addEventListener('click', function(){
        controls.play()
        timer.countDown()
        sound.PressButton()
    })

    btnPause.addEventListener('click', function(){
        controls.pause()
        timer.hold()
        sound.PressButton()
    })

    btnStop.addEventListener('click', function(){
        controls.stop()
        timer.reset()
        sound.PressButton()
    })

    btnSoundOff.addEventListener('click', function(){
        btnSoundOn.classList.remove('hide')
        btnSoundOff.classList.add('hide')
        sound.bgAudio.play()
    })
    
    btnSoundOn.addEventListener('click', function(){
        btnSoundOn.classList.add('hide')
        btnSoundOff.classList.remove('hide')
        sound.bgAudio.pause()
    })

    btnSet.addEventListener('click', function(){
        let newMinutes = controls.getMinutes()

        if(!newMinutes){
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })
}