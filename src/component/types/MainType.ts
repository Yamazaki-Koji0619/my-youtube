// MainPage.tsx ChannelInfo.tsx VideoInfo.tsx
export type randomIdDataType = {
    id: string;
    genre: string;
    name: string;
}[];

export type ChannelInfoType = {
    kind: string;
    etag: string;
    id: string | object;
    snippet: { 
        title: string;
        description: string;
        customUrl?: string;
        publishedAt: string;
        thumbnails: {
            AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag: {
                url: string;
                width: number;
                height: number
            }
        }
    };
    statistics: {
        viewCount: number;
        subscriberCount: number;  // this value is rounded to three significant figures
        hiddenSubscriberCount: boolean;
        videoCount: number;
    };
}[]

export type VideoInfoType = {
    kind: string,
    etag: string,
    id: {
      kind: string,
      videoId: string,
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
    },
    statistics: any
}[];
// MainPage.tsx ChannelInfo.tsx VideoInfo.tsx