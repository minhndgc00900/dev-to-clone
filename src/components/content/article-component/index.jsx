import React from 'react'

function ArticleComponent(props) {
    const { key, data} = props;
    console.log(222, data);
    return (
        <div>
            ArticleComponent
        </div>
    )
}

export default ArticleComponent
