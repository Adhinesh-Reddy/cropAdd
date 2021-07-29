import React from "react"
import {FaVolumeUp} from "react-icons/fa"

type SpeechProps = {
    text: string;
    lang: string;
    locale: string;
    volume?: number;
    pitch?: number;
    rate?: number;
    size?: string;
} 

const Speech = ({
    text,
    lang,
    locale,
    volume = 0.5,
    pitch = 1.5,
    rate=0.8,
    size="2em"
}: SpeechProps) => {

    // const [speaking, setSpeaking] = React.useState(false)
    console.log(locale, text, lang)
    const speak = () => {
        const msg = new SpeechSynthesisUtterance();
        const voices = window.speechSynthesis.getVoices()
        let voice = voices[0]
        for(let i = 0; i < voices.length; i++) {
            // console.log(i, voices[i].name + ' (' + voices[i].lang + ')');
            if (voices[i].lang.substr(0, 2) == locale) {
                voice = voices[i]
                console.log(i, voices[i].name + ' (' + voices[i].lang + ')');

            }
        }
        msg.text = text;
        msg.volume = volume;
        msg.pitch=pitch
        msg.rate=rate
        msg.lang = lang
        msg.voice = voice
        window.speechSynthesis.speak(msg);
    }

    return (
        <div className="d-flex justify-content-center" onClick={speak} style={{cursor: 'pointer'}}>
            <FaVolumeUp size={size} />
        </div>
    )
}

export default React.memo(Speech)