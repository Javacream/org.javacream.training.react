import React from 'react';
import './Content.css'
import {defaultContent as contentText} from '../ApplicationContext'

const Content = () => {
    return (
        <div className="content">{contentText}</div>
    )
}

export default Content