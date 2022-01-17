import React, { useState } from 'react';

export const Tooltip:React.FC<any> = ({label, children}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleHide = () => {
        setShow(false);
    };
    
    return (
        <div 
            className="Tooltip-Wrapper"
            onMouseEnter={handleShow}
            onMouseLeave={handleHide}
        >
           {show && <div className={`Tooltip-Tip`}>
                {label}
            </div>}

            {children}
        </div>
    )
};


