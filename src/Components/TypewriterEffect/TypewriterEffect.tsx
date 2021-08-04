import React from 'react'
import './typewriterEffect.scss'
import { Typewriter } from 'react-simple-typewriter'

function TypewriterEffect() {
    // ============================== phần render ===============================
    return (
        <>
            <div className="homeLeft--talking">
                <h2>I DO <span>
                    <Typewriter
                        words={['DATA ANALYST', 'DATA SCIENTIST']}
                        loop={99}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={2000}
                    />
                    </span>
                </h2>
            </div>
        </>
    )
}

export default TypewriterEffect
