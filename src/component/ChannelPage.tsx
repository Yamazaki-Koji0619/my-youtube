import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';

const ChannelPage: React.FC = () => {

    const dispatch = useDispatch();
    const channelName = useSelector((state: RootState) => state.channel);

    console.log(channelName);

    return(
        <div>ChannelPage</div>
    )
};

export default ChannelPage;