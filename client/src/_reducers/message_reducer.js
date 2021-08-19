import {
    SAVE_MESSAGE,
} from '../_actions/types';

export default function (state = {messages:[]}, action) {
    switch (action.type) {
        case SAVE_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.payload) //action.payload 가 리스폰스 JSON의 text 데이터
            }
        default:
            return state;
    }
}