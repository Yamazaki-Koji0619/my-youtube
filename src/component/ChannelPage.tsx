import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//ストアから情報取得
import { RootState } from '../store';
//type
import { ChannelNameType, ChannelDataType, ChannelVideoType, ChannelVideoSetType } from './types/ChannelType';
//style
import { DisplayFlex, LeftWidth, RightWidth } from '../styles/ChannelPage';
import ClickChannelInfo from '../component/ChannelPageItem/ClickChannelInfo';
import ClickVideoInfo from '../component/ChannelPageItem/ClickVideoInfo';

const ChannelPage: React.FC = () => {

    const dispatch = useDispatch();
    const channelName: ChannelNameType = useSelector((state: RootState) => state.channel.channel);
    const channelData: ChannelDataType = useSelector((state: RootState) => state.channel.channelData);
    //取ってきた情報を配列でまとめ、表示する
    const [channelVideoList, setChannelVideoList] = useState<ChannelVideoType>([]);

    const channel_url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=${channelName}&maxResults=3&order=date`;

    console.log(channelName);
    console.log(channelData);

    useEffect(() => {
        //取ってきた情報をいったん入れておく場所
        const box: ChannelVideoType = [];

        //データを取得し、channelVideoListに格納
        fetch(channel_url).then(res => res.json()).then(result => {
            result.items.map((item: ChannelVideoSetType) => {
                box.push(item)
            });
            setChannelVideoList(box);
        })
    },[]);

    console.log(channelVideoList);

    return(
        <DisplayFlex>
            <LeftWidth>
                <ClickChannelInfo channelItem={channelData} />
                <ClickVideoInfo videoItem={channelVideoList} />
            </LeftWidth>
            <RightWidth>
                こんにちは
            </RightWidth>
        </DisplayFlex>
    )
};

export default ChannelPage;