import React from "react";

export const AppWrapper = ({title, children}) => {
    
    return (
        <div className='app-wrapper'>
           <title className='app-title'>{title}</title>
            <div className="app-content">
                {children}
            </div>
        </div>
    )
}

export default AppWrapper;