import React, {FC, useState} from 'react';
import { ChannelDataPropsType } from '../types/ChannelType';
import { DisplayFlex, DisplayFlexCenter, ChannelImage, MainTitle, SubText, Description } from '../../styles/ChannelPage';

//Material-ui
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    ButtonStyle: {
        color: 'black',
        fontSize: '16px',
        padding: '5px 0 5px 20px'
    }
}));

const ClickChannelInfo: FC<ChannelDataPropsType> = (props) => {

    //styleを付ける
    const classes = useStyles();
    //propsの情報をまとめる
    const channelInfo = props.channelItem;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    console.log(channelInfo);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
      const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <DisplayFlexCenter>
            <div><ChannelImage src={channelInfo.image} alt="image"/></div>
            <div>
                <MainTitle>{channelInfo.title}</MainTitle>
                <DisplayFlex>
                    <SubText>登録者数：{channelInfo.registration}</SubText>
                    <SubText>投稿動画数：{channelInfo.count}</SubText>
                    <SubText>チャンネル開始日：{channelInfo.startTime.slice(0,4)}/{channelInfo.startTime.slice(5,7)}/{channelInfo.startTime.slice(8,10)}</SubText>
                </DisplayFlex>
                <Button className={classes.ButtonStyle} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    詳細をみる
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Description onClick={handleClose}>{channelInfo.description}</Description>
                </Menu>
            </div>
        </DisplayFlexCenter>
    )
};

export default ClickChannelInfo;