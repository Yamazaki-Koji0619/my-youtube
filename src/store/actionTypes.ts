// *
// * action types
// * 一意となるキーを指定するので、Actionが増えるたびにここにキーを書く
// *

export const ActionTypes = {
    sendChannel: "SEND_CHANNEL",
    sendChannelData: "SEND_CHANNEL_DATA",
    increment: "INCREMENT", // "INCREMENT"型
    decrement: "DECREMENT", // "DECREMENT"型
    countReset: "COUNT_RESET", // "COUNT_RESET"型
} as const;