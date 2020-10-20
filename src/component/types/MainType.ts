// MainPage.tsx
export type randomIdDataType = {
    id: string;
    genre: string;
    name: string;
}[];

export type aipDataType = {
    etag: string;
    id: string;
    kind: string;
    snippet?: object;
    statistics?: object
}[];

export type  aipVideoType = object[];
// MainPage.tsx

//ChannelInfo.tsx
export type ChannelInfoPropsType = {
    kind: string;
    etag: string;
    id: string;
    snippet: { 
        title: string;
        description: string;
        customUrl: string;
        publishedAt: string;
        thumbnails: {
        AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag: {
            url: string;
            width: number;
            height: number
        }
    }};
    statistics: {
        viewCount: number;
        subscriberCount: number;  // this value is rounded to three significant figures
        hiddenSubscriberCount: boolean;
        videoCount: number;
    };
}[]
//ChannelInfo.tsx

//VideoInfo.tsx
export type VideoInfoTyoe = {
    kind: string,
    etag: string,
    id: {
      kind: string,
      videoId: string,
      channelId: string,
      playlistId: string
    },
    snippet: {
      publishedAt: string,
      channelId: string,
      title: string,
      description: string,
      thumbnails: {
        AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag: {
          url: string,
          width: number,
          height: number
        }
      },
      channelTitle: string,
      liveBroadcastContent: string
    }
}[];
//VideoInfo.tsx
