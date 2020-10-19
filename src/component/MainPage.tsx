import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomIdDataType, aipDataType, aipVideoType } from './types/MainType';

import { RootState } from '../store';
import { decrementAction, incrementAction, resetAction } from '../store/counter/actions';

const Counter: React.FC = () => {

  const [randomIdData, setRandomIdData] = useState<randomIdDataType>([]); //channelDataからランダムに３つのオブジェクトをいれる
  const [apiDataList, setApiDataList] = useState<aipDataType>(); //apiから取得した情報を入れる
  const [apiVideoList, setApiVideoList] = useState<aipVideoType>(); //apiから取得した情報を入れる

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
    let list: string[] = [];
    for(let i = 0; i < 3; i++){
        let randomIndex = Math.floor(Math.random() * channelData.length);
        result[i] = channelData[randomIndex];
        channelData.splice(randomIndex, 1);
        list = result.map(item => item.id);
    }
    setRandomIdData(result);
    
    const youtube_data = `https://www.googleapis.com/youtube/v3/channels?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=snippet,statistics&id=${list[0]}&id=${list[1]}&id=${list[2]}`;
    const youtube_video = [
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=${list[0]}&maxResults=3&order=date`,
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=${list[1]}&maxResults=3&order=date`,
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=${list[2]}&maxResults=3&order=date`
    ];
      
    //youtubeAPIから情報を取得する
    fetch(youtube_data).then(res => res.json())
        .then(result => {
            const items: aipDataType = result.items;
            setApiDataList(items)
      });

    //youtubeAPIから動画の情報を取得する
    const items: object[] = [];
    youtube_video.map(url => {
        fetch(url).then(res => res.json())
            .then(result => {
                items.push(result.items)
                console.log(items);
            })
        setApiVideoList(items);
    })
  },[]);

  console.log(apiVideoList);

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
    </>
  );
};

export default Counter;
