import React from 'react'
import './Video.css'

const Video = (props) => {
    return (
        <div className='col-lg-3 my-2'>
            <div className="video-card my-2">
                <img src={props.thumbnail} className="card-img-top" alt={props.name} />
                <div className="video-body my-2">
                    <div className="body-channel-image">
                        <img src={props.channel} alt={props.name} />
                    </div>
                    <div className="body-info">
                        <span className="video-title">{props.title} </span>
                        <span className="channel-name">{props.name} </span>
                        <span className="viewstime">{props.views} • {props.time} </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Video
