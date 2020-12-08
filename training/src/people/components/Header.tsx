import React from 'react'
import './Header.css'
import config from '../../Configuration'
import { profile } from '../model/peopleData'
import PersonComponent from './Person'
export default function Header() {
    return (
        <div className="header">
            <p>{config.appTitle}</p>
            <PersonComponent person={profile}></PersonComponent>
        </div>
        )
}