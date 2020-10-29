import React, { FC } from 'react';
import { VideoInfoPropsType } from '../types/MainType';
import { MainTopBottom, VideoInfoStyle, VideoInfoItemStyle, VideoInfoImage } from '../../styles/MainPage';

const VideoInfo: FC<VideoInfoPropsType> = (props) => {

    console.log(props);
    console.log(props.video);

    const VideoInfoProps = props.video;

    return(
        <MainTopBottom>
            <VideoInfoStyle>
                {VideoInfoProps.map((item, index) => (
                    <VideoInfoItemStyle key={index}>
                        <VideoInfoImage src={item.snippet.thumbnails.high.url} alt=""/>
                        <div>{item.snippet.title}</div>
                    </VideoInfoItemStyle>
                ))}
            </VideoInfoStyle>
        </MainTopBottom>
    )
};

export default VideoInfo;