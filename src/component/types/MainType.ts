// MainPage.tsx ChannelInfo.tsx VideoInfo.tsx
export type randomIdDataType = {
    id: string;
    genre: string;
    name: string;
}[];

export type ChannelInfoType = {
    kind: string;
    etag: string;
    id: string;
    snippet: { 
        country?: string;
        title: string;
        description: string;
        customUrl?: string;
        publishedAt: string;
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
        }
        localized?: {
            description: string;
            title: string;
        }
    };
    statistics: {
        viewCount: number;
        subscriberCount: number;  // this value is rounded to three significant figures
        hiddenSubscriberCount: boolean;
        videoCount: number;
        commentCount: number;
    }
}[];

export type VideoInfoType = {
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
        // AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag: {
        //   url: string;
        //   width: number;
        //   height: number;
        // },
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
    },
    statistics: any;
}[];

export type ChannelInfoPropsType = {
    channel: ChannelInfoType;
};

export type ChannelInfoReduxSetType = {
  kind: string;
  etag: string;
  id: string;
  snippet: { 
      country?: string;
      title: string;
      description: string;
      customUrl?: string;
      publishedAt: string;
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
      }
      localized?: {
          description: string;
          title: string;
      }
  };
  statistics: {
      viewCount: number;
      subscriberCount: number;  // this value is rounded to three significant figures
      hiddenSubscriberCount: boolean;
      videoCount: number;
      commentCount: number;
  }
};

export type VideoInfoPropsType = {
    video: VideoInfoType;
};

// MainPage.tsx ChannelInfo.tsx VideoInfo.tsx

export type test = any;

// WatchItem.tsx
export type WatchItemProps = {
    anchor: boolean;
    VideoImageClick: (id: string) => void;
    videoId: string;
};