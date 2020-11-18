import React, {FC} from 'react';
import { ChannelDataPropsType } from '../types/ChannelType';
import { DisplayFlex, DisplayFlexCenter, ChannelImage, ChannelTitle, ChannelText } from '../../styles/ChannelPage';

const ClickChannelInfo: FC<ChannelDataPropsType> = (props) => {

    const channelInfo = props.channelItem;
    console.log(channelInfo);
    

    return(
        <DisplayFlexCenter>
            <div><ChannelImage src={channelInfo.image} alt="image"/></div>
            <div>
                <ChannelTitle>{channelInfo.title}</ChannelTitle>
                <DisplayFlex>
                    <ChannelText>{channelInfo.registration}</ChannelText>
                    <ChannelText>{channelInfo.count}</ChannelText>
                    <ChannelText>{channelInfo.startTime}</ChannelText>
                </DisplayFlex>
                <ChannelText>こんにちは</ChannelText>
            </div>
        </DisplayFlexCenter>
    )
};

export default ClickChannelInfo;