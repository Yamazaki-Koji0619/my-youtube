import React, { FC, useState } from 'react';
import { VideoInfoPropsType } from '../types/MainType';
import { MainTopBottom, VideoInfoStyle, VideoInfoItemStyle, VideoInfoImage } from '../../styles/MainPage';
import WatchItem from './WatchItem';

const VideoInfo: FC<VideoInfoPropsType> = (props) => {

    console.log(props.video);

    const VideoInfoProps = props.video;

    const [anchor, setAnchor] = useState<boolean>(false);
    const [videoId, setVideoId] = useState<string>('');

    const VideoImageClick = (id: string): void => {
        setVideoId(id);
        setAnchor(!anchor);
    };

    return(
        <MainTopBottom>
            <VideoInfoStyle>
                {VideoInfoProps.map((item, index) => (
                    <VideoInfoItemStyle key={index} onClick={() => VideoImageClick(item.id.videoId)}>
                        <VideoInfoImage src={item.snippet.thumbnails.high.url} />
                        <div>{item.snippet.title}</div>
                    </VideoInfoItemStyle>
                ))}
            </VideoInfoStyle>
            {anchor ? <WatchItem anchor={anchor} VideoImageClick={VideoImageClick} videoId={videoId} /> : <div></div>}
        </MainTopBottom>
    )
};

export default VideoInfo;