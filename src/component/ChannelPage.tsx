import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelInfo from './MainPageItem/ChannelInfo';

import { RootState } from '../store';

const ChannelPage: React.FC = () => {

    const dispatch = useDispatch();
    const channelName = useSelector((state: RootState) => state.channel.channel);
    const channelData = useSelector((state: RootState) => state.channel.channelData);
    //取ってきた情報を配列でまとめ、表示する
    const [channelVideoList, setChannelVideoList] = useState<object[]>([]);

    //テストのURLで使う
    const test = 'UC1uZYgOfncA-Gnk0GsLVK5A';
    // const channel_url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=${channelName.channel}&maxResults=3&order=date`;
    const channel_url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=${test}&maxResults=3&order=date`;

    console.log(channelName);
    console.log(channelData);

    useEffect(() => {
        //取ってきた情報をいったん入れておく場所
        const box: object[] = [];

        //データを取得し、channelVideoListに格納
        fetch(channel_url).then(res => res.json()).then(result => {
            result.items.map((item: object) => {
                box.push(item)
            });
            setChannelVideoList(box);
        })
    },[]);

    console.log(channelVideoList);

    return(
        <>
            {/* {channelVideoList.map(list => (
                <ChannelInfo />
            ))} */}
        </>
    )
};

export default ChannelPage;