import { ActionTypes } from "../actionTypes";
// import { Count, CounterActionTypes } from "./types";
import { Channel, ChannelInfoTypes } from "./types";

// *
// * reducer
// *

// const initialState: Count = {
//   value: 0,
// };

// export const countReducer = (state = initialState, action: CounterActionTypes): Count => {
//   switch (action.type) {
//     case ActionTypes.increment: // action.type === "INCREMENT"
//       return { value: state.value + 1 }; // value に1足す
//     case ActionTypes.decrement:
//       // 0以下にはならない
//       return { value: state.value === 0 ? 0 : state.value - 1 };
//     case ActionTypes.countReset:
//       return { value: 0 };
//     default:
//       const _: never = action;
//       return state;
//   }
// };

const initialState: Channel = {
    channel: "",
    channelData: {
        title: "",
        image: "",
        startTime: "",
        count: 0,
        registration: 0,
        description: ""
    },
};

export const channelReducer = (state = initialState, action: ChannelInfoTypes): Channel => {
    switch (action.type) {
        case ActionTypes.sendChannel:
            return {
                ...state,
                channel: action.payload,
            }
        case ActionTypes.sendChannelData:
            return {
                ...state,
                channelData: action.payload,
            }
        default:
            return state;
    }
};