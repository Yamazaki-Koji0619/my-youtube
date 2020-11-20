import styled from 'styled-components';

//共通
export const DisplayFlex = styled.div`
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
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
    width: 90%;
    max-width: 922px;
    padding-top: 20px;
`;

export const RightWidth = styled.div`
    width: 20%;
    border-left: 1px solid rgba(0,0,0,0.2);
    position: fixed;
    top: 80px;
    right: 0;
    height: 100vh;
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
export const ScrollDiv = styled.div`
    height: 78vh;
    overflow: scroll;
`;

export const VideoImage = styled.img`
    width: 45%;
`;

export const VideoTextWidth = styled.div`
    width: 54%;
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

//SideMenu.tsx
export const MenuWidth = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const MenuUl = styled.ul`
    list-style: none;
    padding: 0 0 0 20px;
    margin: 0;
`;

export const MenuTitle = styled.h4`
    padding: 0;
    margin-bottom: 0;
`;

export const MenuList = styled.li`
    margin: 5px 0;
    padding: 10px 0;
`;
//SideMenu.tsx
