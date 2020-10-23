import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomIdDataType, ChannelInfoType, VideoInfoType } from './types/MainType';
import ChannelInfo from './MainPageItem/ChannelInfo';
import VideoInfo from './MainPageItem/VideoInfo';

import { RootState } from '../store';
import { decrementAction, incrementAction, resetAction } from '../store/counter/actions';

const Counter: React.FC = () => {

  const [firstChanelItem, setFirstChanelItem] = useState<ChannelInfoType>([]);
  const [secondChannelItem, setSecondChannelItem] = useState<ChannelInfoType>([]);
  const [thirdChannelItem, setThirdChannelItem] = useState<ChannelInfoType>([]);

  const [firstVideoItem, setFirstVideoItem] = useState<VideoInfoType>([]);
  const [secondVideoItem, setSecondVideoItem] = useState<VideoInfoType>([]);
  const [thirdVideoItem, setThirdVideoItem] = useState<VideoInfoType>([]);

  const channelData: randomIdDataType = [
      {id: 'UC1uZYgOfncA-Gnk0GsLVK5A', genre: 'music', name: 'Unison Square Garden'},
      {id: 'UCpGpA7mSYmNJjLiJxKso5QA', genre: 'comedy', name: '霜降り明星'},
      {id: 'UCDhjThxt99rkGcjcEreyOQg', genre: 'study', name: '李姉妹'},
      {id: 'UC-bOAxx-YOsviSmqh8COR0w', genre: 'study', name: 'トラハック'},
      {id: 'UCti6dG0zSAetLGGYcgNML4Q', genre: 'study', name: 'しまぶー'},
      {id: 'UC3-1iYGHfR43q_b974vUNYg', genre: 'study', name: 'フェルミ研究所'},
      {id: 'UCFkncXKwLRtA2MFdXOv34yQ', genre: 'game', name: 'Nephrite'},
  ];

  useEffect(() => {
    //youtube_dataに入れるためのidをランダムに作成する
    const result = [];
    let list: string[] = [];//APIを叩くためのIdを保存する
    for(let i = 0; i < 3; i++){
        let randomIndex = Math.floor(Math.random() * channelData.length);
        result[i] = channelData[randomIndex];
        channelData.splice(randomIndex, 1);
        list = result.map(item => item.id);
    }
    
    const youtube_data = `https://www.googleapis.com/youtube/v3/channels?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=snippet,statistics&id=${list[0]}&id=${list[1]}&id=${list[2]}`;
    const youtube_video = [
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=${list[0]}&maxResults=3&order=date`,
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=${list[1]}&maxResults=3&order=date`,
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=${list[2]}&maxResults=3&order=date`
    ];

    //youtubeAPIから情報を取得する
    const ChannelData = async() => {
        await fetch(youtube_data).then(res => res.json()).then(result => {
            firstChanelItem.push(result.items[0]);
            secondChannelItem.push(result.items[1]);
            thirdChannelItem.push(result.items[2]);
        });
    }
    
    ChannelData();
    
    //youtubeAPIから動画の情報を取得する
    const item01: VideoInfoType = [];
    const item02: VideoInfoType = [];
    const item03: VideoInfoType = [];
    const VideoData = async() => {
        await youtube_video.map(url => {
            fetch(url).then(res => res.json()).then(result => {
                //ChannelAPIとSearchAPIの情報が一致しているものをまとめる
                result.items.map((item: any) => {
                    if(firstChanelItem[0].snippet.title === item.snippet.channelTitle){
                        item01.push(item);
                        // setFirstVideoItem(item01);
                    }else if(secondChannelItem[0].snippet.title === item.snippet.channelTitle){
                        item02.push(item);
                        // setSecondVideoItem(item02);
                    }else if(thirdChannelItem[0].snippet.title === item.snippet.channelTitle){
                        item03.push(item);
                        // setThirdVideoItem(item03);
                    }
                })
            })
        })
        setFirstVideoItem(item01);
        setSecondVideoItem(item02);
        setThirdVideoItem(item03);
    }

    VideoData();

  },[]);

//   console.log(firstChanelItem);
//   console.log(secondChannelItem);
//   console.log(thirdChannelItem);
//   console.log(firstVideoItem);
//   console.log(secondVideoItem);
//   console.log(thirdVideoItem);


  const currentCount = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementAction());
  const handleDecrement = () => dispatch(decrementAction());
  const handleReset = () => dispatch(resetAction());
  return (
    <>
      <div>{currentCount.value}</div>
      <button onClick={handleIncrement}>Up</button>
      <button onClick={handleDecrement}>Down</button>
      <button onClick={handleReset}>Reset</button>
      <ChannelInfo channel={firstChanelItem} />
      <VideoInfo video={firstVideoItem} />
    </>
  );
};

export default Counter;
