import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChannelInfoPropsType } from '../types/MainType';
import { useDispatch } from 'react-redux';
import { channelInfoAction } from '../../store/channel/actions';
import { MainText, SubText } from '../../styles/index';
import { MainBottom, ChannelInfoStyle, ChannelInfoImage, ChannelInfoItemStyle } from '../../styles/MainPage';
import { RootState } from '../../store';

const ChannelInfo: FC<ChannelInfoPropsType> = (props) => {

    const dispatch = useDispatch();
    const channelName = useSelector((state: RootState) => state.channel);

    const ChannelInfoProps = props.channel;

    const ChannelClick = (channel: string) => {
        dispatch(channelInfoAction(channel));
    };

    return(
        <MainBottom>
            {ChannelInfoProps.map((item, index) => (
                <ChannelInfoStyle to="/channel" key={index} onClick={() => ChannelClick(item.snippet.title)}>
                    <div>
                        <ChannelInfoImage src={item.snippet.thumbnails.medium.url} alt=""/>
                    </div>
                    <div>
                        <MainText>{item.snippet.title}</MainText>
                        <ChannelInfoItemStyle>
                            <SubText>チャンネル登録者数：{item.statistics.subscriberCount}人</SubText>
                            <SubText>投稿動画数：{item.statistics.videoCount}</SubText>
                            <SubText>チャンネル開始日：{item.snippet.publishedAt.slice(0,4)}/{item.snippet.publishedAt.slice(5,7)}/{item.snippet.publishedAt.slice(8,10)}</SubText>
                        </ChannelInfoItemStyle>
                    </div>
                </ChannelInfoStyle>
            ))}
        </MainBottom>
    )
};

export default ChannelInfo;