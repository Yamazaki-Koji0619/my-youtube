import { Action } from "redux";

import { ActionTypes } from "../actionTypes";

// *
// * type of Actions
// *

// stateの型
// export type Count = {
//   value: number;
// };

export type Channel = {
    channel: string;
    channelData: object;
};


interface SendChannelAction extends Action {
    type: typeof ActionTypes.sendChannel;
    payload: string;
}

interface SendChannelDataAction extends Action {
    type: typeof ActionTypes.sendChannelData;
    payload: object;
}

export type ChannelInfoTypes = SendChannelAction | SendChannelDataAction;

// // Actionの型 Actionを継承
// interface IncrementAction extends Action {
//   type: typeof ActionTypes.increment; // "INCREMENT"型
// }

// interface DecrementAction extends Action {
//   type: typeof ActionTypes.decrement;
// }

// interface ResetAction extends Action {
//   type: typeof ActionTypes.countReset;
// }

// // exportするActionの型, Unionで結合
// export type CounterActionTypes = IncrementAction | DecrementAction | ResetAction;