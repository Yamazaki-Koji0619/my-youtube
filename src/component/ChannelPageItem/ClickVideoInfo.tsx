import React, { FC } from 'react';
import { ChannelVideoPropsType } from '../types/ChannelType';
import { VideoFlex, VideoImage, MainTitle, SubText, VideoDescription } from '../../styles/ChannelPage';

const ClickVideoInfo: FC<ChannelVideoPropsType> = (props) => {

    console.log(props);
    const videoInfo = props.videoItem;

    return(
        <>
            {videoInfo.map((item, index) => (
                <VideoFlex key={index}>
                    <VideoImage src={item.snippet.thumbnails.high.url} alt="動画画像"/>
                    <div>
                        <MainTitle>{item.snippet.title}</MainTitle>
                        <SubText>動画投稿日：{item.snippet.publishTime.slice(0,4)}/{item.snippet.publishTime.slice(5,7)}/{item.snippet.publishTime.slice(8,10)}</SubText>
                        <SubText>動画詳細▽</SubText>
                        <VideoDescription>{item.snippet.description}</VideoDescription>
                    </div>
                </VideoFlex>
            ))}
        </>
    )
};

export default ClickVideoInfo;