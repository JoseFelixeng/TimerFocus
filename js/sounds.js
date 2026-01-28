export default function(){
    //const btnPress = new Audio()
    const buttonPressAudio = new Audio("sons/audios_button-press.wav")
    const kitchenTimer = new Audio("sons/audios_kichen-timer.mp3")
    const bgAudio = new Audio("sons/audios_bg-audio.mp3")

    bgAudio.loop


    function PressButton(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitchenTimer.play()
    }

    return {
        PressButton,
        timeEnd,
        bgAudio
    }
}