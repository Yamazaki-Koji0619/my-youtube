import styled from 'styled-components';
import { Link } from 'react-router-dom';

// MainPage.tsx
export const MainStyle = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 20px;
`;
// MainPage.tsx


// ChannelInfo.tsx
export const MainBottom = styled.div`
    border-bottom: 1px solid black;
`

export const ChannelInfoStyle = styled(Link)`
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

export const ChannelInfoItemStyle = styled.div`
    display: flex;
`;

export const ChannelInfoImage = styled.img`
    border-radius: 50%;
    overflow: hidden;
    width: 120px;
    margin-right: 20px;
`;
// ChannelInfo.tsx


//VideoInfo.tsx
export const MainTopBottom = styled.div`
    padding: 20px 0 50px;
`

export const VideoInfoStyle = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const VideoInfoItemStyle = styled.div`
    width: 32%;
`;

export const VideoInfoImage = styled.img`
    width: 100%;
`;
//VideoInfo.tsx

//WatchItem.tsx
export const BackBlack = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 999999;
`;

export const VideoFrame = styled.iframe`
    width: 950px;
    height: 534px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
//WatchItem.tsx
