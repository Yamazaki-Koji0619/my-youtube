import styled from 'styled-components';

// MainPage.tsx
export const MainStyle = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;
// MainPage.tsx


// ChannelInfo.tsx
export const MainBottom = styled.div`
    border-bottom: 1px solid black;
`

export const ChannelInfoStyle = styled.div`
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