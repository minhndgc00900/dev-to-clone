import { createSelector } from 'reselect'

const articleSelector = rootStore => rootStore.articlesStore;

export const getArticlesSelector = createSelector(
    articleSelector,
    articlesStore => {
        return articlesStore.articles
        ? articlesStore.articles
        : null
    }
)