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