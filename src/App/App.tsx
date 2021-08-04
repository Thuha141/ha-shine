import React from 'react'
import '../assets/itcss/app.scss'
import { BrowserRouter as Router } from "react-router-dom";
import Directional from '../Router/Directional'



function App() {
    return (
        <main>
            <Router>
                <Directional/>
            </Router>
        </main>
    )
}
export default App
