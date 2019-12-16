import React from 'react';
import {user} from '../testdata/PeopleData'
export default function PeopleAppFooter(){
    const footerText = user.info()
    return (
        <>
        <hr />
        <p className="footer">{footerText}</p>
        </>
    )
}
