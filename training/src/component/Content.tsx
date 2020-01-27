import React from 'react';
import './Content.css'
import {contentText} from '../test/testData'

const Content = () => {
    return (
        <div className="content">{contentText}</div>
    )
}

export default Content