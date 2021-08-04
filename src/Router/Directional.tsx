import Home from '../pages/Home/Home';
import MySkill from '../pages/MySkill/MySkill';
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Directional() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/my-skill" component={MySkill} />
            </Switch>
        </>
    )
}

export default Directional
