import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from 'react'

function About() {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('hide')

    function toggle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('show')
        }
    }

    return (
        <div id="about"> 
            <h2>
                <button className = "toggler" onCLick={toggle}>{buttonText}</button>
            </h2>
            <div style={{display: display}}>
                <p>
                    I'm a student at Bsoton University studying [computer science]. I'm currently a member of [Hack4Impact].
                </p>
                <br/>
                <h3>My Skills</h3>
                <div className="60" scr={HTML}/>
                <div className="60" scr={CSS}/>
                <div className="60" scr={PY}/>
                <div className="60" scr={JS}/>
            </div>
        </div>
)
}

export default About