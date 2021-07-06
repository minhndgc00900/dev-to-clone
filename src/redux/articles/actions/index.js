import * as services from '../../../services/articles/index'
import { GET_ARTICLE_FAILURE, GET_ARTICLE_SUCCESSFUL } from '../action-types';

export const getArticles = () => dispatch => {
    services.getArticles().then(res => {
        res && dispatch(getArticlesSuccess(res))
    }).catch(error =>
        dispatch(getArticlesFailure(error)))
};

const getArticlesSuccess = res => ({
    type: GET_ARTICLE_SUCCESSFUL,
    payload: res.data
});

const getArticlesFailure = err => ({
    type: GET_ARTICLE_FAILURE,
    error: err
});