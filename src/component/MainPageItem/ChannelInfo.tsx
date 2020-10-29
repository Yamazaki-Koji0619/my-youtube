import React, { FC } from 'react';
import { ChannelInfoPropsType } from '../types/MainType';
import styled from "styled-components";
import { ChannelInfoStyle, ChannelInfoImage, ChannelInfoItemStyle } from '../../styles/MainPage';
// import {} from 'styled-components/cssprop';

const ChannelInfo: FC<ChannelInfoPropsType> = (props) => {
    const Test = styled.div`color: red;`;


    console.log(props);
    console.log(props.channel[0]);

    const ChannelInfoProps = props.channel;

    return(
        <div>
            <Test>Test div</Test>
            {ChannelInfoProps.map((item, index) => (
                <ChannelInfoStyle key={index}>
                    <div>
                        <ChannelInfoImage src={item.snippet.thumbnails.medium.url} alt=""/>
                    </div>
                    <div>
                        <h3>{item.snippet.title}</h3>
                        <ChannelInfoItemStyle>
                            <p>{item.statistics.subscriberCount}</p>
                            <p>{item.statistics.videoCount}</p>
                            <p>{item.snippet.publishedAt.slice(0,4)}{item.snippet.publishedAt.slice(5,7)}{item.snippet.publishedAt.slice(8,10)}</p>
                        </ChannelInfoItemStyle>
                    </div>
                </ChannelInfoStyle>
            ))}
        </div>
    )
};

export default ChannelInfo;