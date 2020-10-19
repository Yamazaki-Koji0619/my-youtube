import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomIdData } from './types/MainType';

import { RootState } from '../store';
import { decrementAction, incrementAction, resetAction } from '../store/counter/actions';

const Counter: React.FC = () => {

  const [randomIdData, setRandomIdData] = useState<randomIdData>([]);

  const channelId: randomIdData = [
      {id: 'UC1uZYgOfncA-Gnk0GsLVK5A', genre: 'music', name: 'Unison Square Garden'},
      {id: 'UCpGpA7mSYmNJjLiJxKso5QA', genre: 'comedy', name: '霜降り明星'},
      {id: 'UCDhjThxt99rkGcjcEreyOQg', genre: 'study', name: '李姉妹'},
      {id: 'UC-bOAxx-YOsviSmqh8COR0w', genre: 'study', name: 'トラハック'},
      {id: 'UCti6dG0zSAetLGGYcgNML4Q', genre: 'study', name: 'しまぶー'},
      {id: 'UC3-1iYGHfR43q_b974vUNYg', genre: 'study', name: 'フェルミ研究所'},
      {id: 'UCFkncXKwLRtA2MFdXOv34yQ', genre: 'game', name: 'Nephrite'},
  ];

  useEffect(() => {
    const result = [];
    for(let i = 0; i < 3; i++){
        let randomIndex = Math.floor(Math.random() * channelId.length);
        result[i] = channelId[randomIndex];
        channelId.splice(randomIndex, 1);
    }
    setRandomIdData(result);
  },[])

  console.log(randomIdData);

  const unisonId = 'UC1uZYgOfncA-Gnk0GsLVK5A';
  const shimoId = 'UCpGpA7mSYmNJjLiJxKso5QA';
  const youtube_url = `https://www.googleapis.com/youtube/v3/channels?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=snippet,statistics&id=${unisonId}&id=${shimoId}`;

  useEffect(() => {
      fetch(youtube_url).then(res => res.json())
      .then(result => {
        console.log(result)
    })
  });

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