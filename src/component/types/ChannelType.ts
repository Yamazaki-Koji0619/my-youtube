export type ChannelNameType = string;

export type ChannelDataType = {
    title: string;
    image: string;
    startTime: string;
    count: number;
    registration: number;
    description: string;
};

export type ChannelDataPropsType = {
    channelItem: ChannelDataType;
};

export type ChannelVideoSetType = {
    kind: string;
    etag: string;
    id: {
        kind: string;
        videoId: string;
    },
    snippet: {
        publishedAt: string;
        publishTime: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
        default:{
            height: number;
            url: string;
            width: number;
        },
        high:{
            height: number;
            url: string;
            width: number;
        },
        medium:{
            height: number;
            url: string;
            width: number;
        }
        },
        channelTitle: string;
        liveBroadcastContent: string;
    }
};

export type ChannelVideoType = ChannelVideoSetType[];


export type ChannelVideoPropsType = {
    videoItem: ChannelVideoType
};