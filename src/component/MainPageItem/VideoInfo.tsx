import React, { FC } from 'react';
import { VideoInfoPropsType } from '../types/MainType';
import  "./../../assets/MainPage.css";

const VideoInfo: FC<VideoInfoPropsType> = (props) => {

    console.log(props);
    console.log(props.video);

    const VideoInfoProps = props.video;

    return(
        <div>
            <div>VideoInfo</div>
            {VideoInfoProps.map((item, index) => (
                <div key={index}>
                    <img src={item.snippet.thumbnails.high.url} alt=""/>
                    <div>{item.snippet.title}</div>
                </div>
            ))}
        </div>
    )
};

export default VideoInfo;