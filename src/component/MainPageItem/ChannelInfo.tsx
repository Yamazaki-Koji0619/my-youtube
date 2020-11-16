import React, { FC } from 'react';
import { ChannelInfoReduxSetType, ChannelInfoPropsType } from '../types/MainType';
import { useDispatch } from 'react-redux';
import { channelInfoAction, channelDataItem } from '../../store/channel/actions';
import { MainText, SubText } from '../../styles/index';
import { MainBottom, ChannelInfoStyle, ChannelInfoImage, ChannelInfoItemStyle } from '../../styles/MainPage';

const ChannelInfo: FC<ChannelInfoPropsType> = (props) => {

    const dispatch = useDispatch();

    const ChannelInfoProps = props.channel;

    const ChannelInfoClick = (channelActionItem: ChannelInfoReduxSetType) => {
        //チャンネルのIDを渡し、ChannelPageでAPI処理に使う
        dispatch(channelInfoAction(channelActionItem.id))

        const passChannelItem: object = {
            title: channelActionItem.snippet.title,
            image: channelActionItem.snippet.thumbnails.medium.url,
            startTime: channelActionItem.snippet.publishedAt,
            count: channelActionItem.statistics.viewCount,
            registration: channelActionItem.statistics.subscriberCount
        };

        //チャンネルの基本的な情報を渡し、ChannelPageでそのまま表示させる
        dispatch(channelDataItem(passChannelItem))
    }

    console.log(props);

    return(
        <MainBottom>
            {ChannelInfoProps.map((item, index) => (
                <ChannelInfoStyle to="/channel" key={index} onClick={() => ChannelInfoClick(item)}>
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