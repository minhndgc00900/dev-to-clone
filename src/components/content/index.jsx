import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { getArticlesSelector } from '../../redux/articles/selectors';
import { getArticles } from '../../redux/articles/actions/index';
import * as services from '../../services/articles/index';
import ArticleComponent from './article-component/index';
import { useStyles } from './content.styles';
import { createStructuredSelector } from 'reselect';

function Content(props) {
    const {
        fetchArticle,
        articlesData
    } = props;
    const [articles, setArticles] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        fetchArticle();
        setTimeout(() => {
            services.getArticles().then(res => {
                setArticles(res.data);
            });
        }, 2000);
    }, []);

    useEffect(() => {
        const fetchAgain = () => {
            if (articles !== null) {
                services.getArticles().then(res => {
                    setArticles(prev => [...prev , ...res.data]);
                });
            }
        };

        const handleScroll = () => {
            const html = document.documentElement;
            const body = document.body;
            const windowheight =
                "innerHeight" in window ? window.innerHeight : html.offsetHeight;

            const docHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );

            const windowBottom = windowheight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                console.log("we reached the bottom");
                fetchAgain();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [articles]);

    console.log(555, articlesData);
    const todos = useSelector(state => state.articlesStore)
    console.log(5552, todos);

    return (
        <main className={classes.mainContent}>
            <header className={classes.headerContent}>
                <h1 className={classes.labelName}>Posts</h1>
                <nav className={classes.horizontalNavigation}>
                    <a href="/#">Feed</a>
                    <a href="/#">Week</a>
                    <a href="/#">Month</a>
                    <a href="/#">Infinity</a>
                    <a href="/#">Latest</a>
                </nav>
            </header>
            <div className={classes.articles}>
                {/* inline conditional expression */}
                {articles &&
                    articles.map((article, id) => {
                        return <ArticleComponent
                            key={id}
                            data={article} />
                    })}
            </div>
        </main>
    )
}


Content.propTypes = {
    // props: PropTypes
    fetchArticle: PropTypes.any,
    articlesData: PropTypes.any,
}

const mapDispatchToProps =  {
    fetchArticle: param => getArticles(param = []),
}

const mapStateToProps = createStructuredSelector({
    articlesData: getArticlesSelector,        
});


export default connect(mapStateToProps, mapDispatchToProps)(Content)