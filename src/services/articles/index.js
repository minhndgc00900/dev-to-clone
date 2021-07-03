import { requestService } from "./../requests.services";

export const getArticles = () =>
    requestService.getRequest('/articles');