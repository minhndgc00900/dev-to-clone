import React from 'react'
import PropTypes from 'prop-types'

function Content(props) {
    const { articles, Item, Span } = props; 
    return (
        <ul>
            {articles.map((a) => {
                return (
                    <Item key={a.id}>
                        <a href="#">
                            {a.mainTitle}
                        </a>
                        <br />
                        <small>
                            {a.subText}
                        </small>
                        {a.newarticle &&
                            <Span>
                                new
                            </Span>}
                    </Item>
                );
            })}
        </ul>
    )
}

Content.propTypes = {

}

export default Content

