import React from 'react';
import './Footer.css'
import {userProfile} from '../ApplicationContext'
import PersonComponent from '../people/component/PersonComponent'
import LogComponent from '../util/component/LogComponent'
const Footer = () => {
    return (
        <div className="footer"><PersonComponent detail={false} person={userProfile} />
        <LogComponent max={3}/>
        </div>

    )
}

export default Footer