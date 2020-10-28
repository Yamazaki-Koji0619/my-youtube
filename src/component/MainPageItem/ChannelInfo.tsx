import React, { FC } from 'react';
import { ChannelInfoPropsType } from '../types/MainType';
import * as styles from "../../assets/MainPage.css";

const ChannelInfo: FC<ChannelInfoPropsType> = (props) => {

    console.log(props);
    console.log(props.channel[0]);

    const ChannelInfoProps = props.channel;

    return(
        <div>
            {ChannelInfoProps.map((item, index) => (
                <div key={index} className={ styles.channel_info }>
                    <div>
                        <img src={item.snippet.thumbnails.medium.url} alt=""/>
                    </div>
                    <div>
                        <h3>{item.snippet.title}</h3>
                        <div className={ styles.channel_info_item }>
                            <p>{item.statistics.subscriberCount}</p>
                            <p>{item.statistics.videoCount}</p>
                            <p>{item.snippet.publishedAt.slice(0,4)}{item.snippet.publishedAt.slice(5,7)}{item.snippet.publishedAt.slice(8,10)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ChannelInfo;