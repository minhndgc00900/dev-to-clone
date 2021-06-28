import React, { useEffect, useState } from 'react'
import { useStyles } from './content.styles'
import ArticleComponent from './article-component/index'

function Content() {
    const [articles, setArticles] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('http://dev.to/api/articles');
            const data = await res.json();
            setArticles(data);
        }, 2000);
    }, []);

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
