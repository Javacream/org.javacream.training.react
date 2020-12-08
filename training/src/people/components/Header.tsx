import React from 'react'
import './Header.css'
import config from '../../Configuration'
import { profile } from '../model/peopleData'

export default function Header() {
    return (
        <div className="header">
            <p>{config.appTitle}</p>
            <p className="right">{profile.firstname} {profile.lastname}</p>
        </div>
        )
}