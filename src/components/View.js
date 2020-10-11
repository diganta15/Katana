import React from 'react'

function View({id, Title, BgPic, Id}) {
    return (
        <div>
            <div className="bigPic">
                <img src={BgPic} alt=""/>
            </div>
        </div>
    )
}

export default View
