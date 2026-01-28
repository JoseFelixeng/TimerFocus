// DOM (Document Object Model)
import   Controls  from "./controls.js"
import  Timer  from "./timer.js"
import sounds from "./sounds.js"
import {btnPlay, btnPause, btnSet, btnStop, minutesDisplay, secondsDisplay} from "./elements.js"
import Events from "./events.js"

//variaveis
const controls = Controls({btnPlay, btnPause, btnStop, btnSet})
const sound = sounds()
const configTimer = { minutesDisplay, secondsDisplay, resetControls: controls.reset}
const timer = Timer(configTimer) // Injeção de dependecias

//Event-Driven
//Programação Imperativa
//CallBack

Events({controls, timer, sound})


