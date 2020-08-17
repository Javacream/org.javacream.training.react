import React from 'react';

export default function FooterComponent() {
    const footerText = "Javacream"
    const actualTime = new Date()
    return  (
        <div id="footer">
            <p className="right">{footerText}</p>
            <p className="center"> {actualTime.toLocaleString()}</p>
        </div>
      )

}

