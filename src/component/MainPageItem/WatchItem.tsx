import React, { FC } from 'react';
import { WatchItemProps } from '../types/MainType';
import { BackBlack, VideoFrame } from '../../styles/MainPage';

const WatchItem: FC<WatchItemProps> = (props) => {

    console.log(props);

    const videoId = props.videoId;
    const youtube_url = `https://www.youtube.com/embed/${videoId}`;

    // const CancelAnchor = () => {
    //     console.log(!props.anchor);
    //     return !props.anchor;
    // }

    return(
        <BackBlack onClick={() => props.VideoImageClick("cancel")}>
            <VideoFrame src={youtube_url}></VideoFrame>
        </BackBlack>
    )
};

export default WatchItem;