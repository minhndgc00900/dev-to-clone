import { GET_ARTICLE_SUCCESSFUL, GET_ARTICLE_FAILURE } from '../action-types/index'

export const initialState = {
    articles: null,
}

const articlesReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ARTICLE_SUCCESSFUL:
            console.log(666, actions.payload);
            return {
                ...state,
                articles: actions.payload
            }
        case GET_ARTICLE_FAILURE:
            return {
                ...state,
                articles: actions.error
            }
        default:
            return state
    }
}

export default articlesReducer