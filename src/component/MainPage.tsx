import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomIdDataType, ChannelInfoType, VideoInfoType } from './types/MainType';
import ChannelInfo from './MainPageItem/ChannelInfo';
import VideoInfo from './MainPageItem/VideoInfo';
import { MainStyle } from '../styles/MainPage';

import { RootState } from '../store';
import { decrementAction, incrementAction, resetAction } from '../store/counter/actions';

const MainPage: React.FC = () => {

  const [firstChannelItem, setFirstChannelItem] = useState<ChannelInfoType>([]);
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

    const VideoInfoMap = (firstChannelItem: ChannelInfoType, secondChannelItem: ChannelInfoType, thirdChannelItem: ChannelInfoType ) => {
        youtube_video.map(url => {
            fetch(url).then(res => res.json()).then(result => {
                if(firstChannelItem !== undefined && secondChannelItem !== undefined && thirdChannelItem !== undefined){
                    console.log(firstChannelItem);
                    console.log(secondChannelItem);
                    console.log(thirdChannelItem);
                    if(result.items[0].snippet.channelTitle === firstChannelItem[0].snippet.title){
                        setFirstVideoItem(result.items);
                    }else if(result.items[0].snippet.channelTitle === secondChannelItem[0].snippet.title){
                        setSecondVideoItem(result.items);
                    }else if(result.items[0].snippet.channelTitle === thirdChannelItem[0].snippet.title){
                        setThirdVideoItem(result.items);
                    }
                }
            })
        })
    }

    const ChannelVideoData = async() => {
        //youtubeAPIから情報を取得する
        await fetch(youtube_data).then(res => res.json()).then(result => {
            const item01 = [result.items[0]];
            const item02 = [result.items[1]];
            const item03 = [result.items[2]];
            setFirstChannelItem(item01);
            setSecondChannelItem(item02);
            setThirdChannelItem(item03);
            VideoInfoMap(item01, item02, item03);
        });

    }

    ChannelVideoData();
  },[]);

  console.log(firstChannelItem);
  console.log(secondChannelItem);
  console.log(thirdChannelItem);
  console.log(firstVideoItem);
  console.log(secondVideoItem);
  console.log(thirdVideoItem);

  const currentCount = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementAction());
  const handleDecrement = () => dispatch(decrementAction());
  const handleReset = () => dispatch(resetAction());
  return (
    <MainStyle>
      <div>{currentCount.value}</div>
      <button onClick={handleIncrement}>Up</button>
      <button onClick={handleDecrement}>Down</button>
      <button onClick={handleReset}>Reset</button>
      <ChannelInfo channel={firstChannelItem} />
      <VideoInfo video={firstVideoItem} />
      {/* <ChannelInfo channel={secondChannelItem} />
      <VideoInfo video={secondVideoItem} />
      <ChannelInfo channel={thirdChannelItem} />
      <VideoInfo video={thirdVideoItem} /> */}
    </MainStyle>
  );
};

export default MainPage;
