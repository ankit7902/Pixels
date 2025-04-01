

import React from 'react'
import spinner from '../spinner.gif'


const Loader = () => {
    return (
        <>
            <div className="img">
                <img src={spinner}></img>
            </div>
        </>

    )
}

export default Loader