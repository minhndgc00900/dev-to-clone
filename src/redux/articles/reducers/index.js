import * as actionTypes from '../action-types/index'

export const initialState = {
    articles: null,
}

const articlesReducer = (state = initialState, actions) => {
    console.log(666, actions);
    switch (actions.type) {
        case actionTypes.GET_ARTICLE_SUCCESSFUL:
            return ({
                ...state,
                articles: actions.payload
            })
        case actionTypes.GET_ARTICLE_FAILURE:
            return ({
                ...state,
                articles: actions.error
            })
        default:
            return state
    }
}

export default articlesReducer