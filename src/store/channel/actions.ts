import { ActionTypes } from "../actionTypes";
import { ChannelInfoTypes } from './types';
import { ChannelDataType } from '../../component/types/ChannelType';
// import { CounterActionTypes } from "./types";

// *
// * action creators
// *

export const channelInfoAction = (channel: string): ChannelInfoTypes => {
    console.log(channel);
    return {
        type: ActionTypes.sendChannel,
        payload: channel,
    };
};

export const channelDataItem = (channelData: ChannelDataType): ChannelInfoTypes => {
    console.log(channelData);
    return {
        type: ActionTypes.sendChannelData,
        payload: channelData
    }
}

// export const incrementAction = (): CounterActionTypes => {
//   return {
//     type: ActionTypes.increment, // "INCREMENT"
//   };
// };

// export const decrementAction = (): CounterActionTypes => {
//   return {
//     type: ActionTypes.decrement,
//   };
// };

// export const resetAction = (): CounterActionTypes => {
//   return {
//     type: ActionTypes.countReset,
//   };
// };