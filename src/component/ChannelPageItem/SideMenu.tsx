import React, { FC } from 'react';
import { MenuWidth, MenuTitle, MenuUl, MenuList } from '../../styles/ChannelPage';
import { ChannelVideoPropsType } from '../types/ChannelType';

const SideMenu: FC<ChannelVideoPropsType> = (props) => {

    const videoList = props.videoItem;
    const setVideoList = props.setChannelVideoList;

    const date = new Date();
    const nowYear = date.getFullYear();
    const nowMonth = date.getMonth();
    const nowDay = date.getDay();

    console.log(`${nowYear}-${nowMonth}-${nowDay}`);
    
    const newVideoClick = (): void => {
        
        console.log('new')
    };

    const oldVideoClick = (): void => {
        console.log('old')
    };

    const longVideoClick = (): void => {
        console.log('long')
    };

    const shortVideoClick = (): void => {
        console.log('short')
    };

    const manyVideoClick = (): void => {
        console.log('many')
    };

    const littleVideoClick = (): void => {
        console.log('little')
    };

    const menuCategory = [
        {name: '投稿が新しい順', func: newVideoClick},
        {name: '投稿が古い順', func: oldVideoClick},
        {name: '再生時間が長い順', func: longVideoClick},
        {name: '再生時間が短い順', func: shortVideoClick},
        {name: '再生回数が多い順', func: manyVideoClick},
        {name: '再生回数が少ない順', func: littleVideoClick}
    ];

    return(
        <MenuWidth>
            <MenuTitle>動画を並べ替える▽</MenuTitle>
            <MenuUl>
                {menuCategory.map((item, index) => (
                    <MenuList key={index} onClick={() => item.func()}>{item.name}</MenuList>
                ))}
            </MenuUl>
        </MenuWidth>
    )
};

export default SideMenu;