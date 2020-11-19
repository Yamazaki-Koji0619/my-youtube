import styled from 'styled-components';

//共通
export const DisplayFlex = styled.div`
    display: flex;
`
;
export const MainTitle = styled.h3`
    margin: 5px 0;
    padding-left: 20px;
`;

export const SubText = styled.p`
    margin: 5px 0;
    padding-left: 20px;
`;
//共通

//ChannelPage.tsx
export const LeftWidth = styled.div`
    width: 75%;
    max-width: 922px;
    margin-left: 64px;
`;

export const RightWidth = styled.div`
    width: 25%;
`;
//ChannelPage.tsx

//ClickChannelInfo.tsx
export const DisplayFlexCenter = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
`;
    
export const ChannelImage = styled.img`
    width: 120px;
    border-radius: 50%;
`;
    

export const Description = styled.div`
    width: 600px;
    height: auto;
    padding: 10px;
    white-space: pre-wrap;
`;
//ClickChannelInfo.tsx

//ClickVideoInfo.tsx
export const VideoImage = styled.img`
    width: 45%;
`;

export const VideoDescription = styled.p`
    margin: 5px 0;
    padding-left: 20px;
    overflow: hidden;
    white-space: pre-wrap;
`;

export const VideoFlex = styled(DisplayFlex)`
    margin: 20px 0;
`
//ClickVideoInfo.tsx
