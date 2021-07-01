import React, { useEffect, useState } from 'react'
import { useStyles } from './content.styles'
import ArticleComponent from './article-component/index'
import { getArticles } from '../../services/articles';

function Content() {
    const [articles, setArticles] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        setTimeout(() => {
            getArticles().then(res => {
                setArticles(res.data);
            });
        }, 2000);
    }, []);

    useEffect(() => {
        const fetchAgain = () => {
            if (articles !== null) {
                getArticles().then(res => {
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

export default Content
