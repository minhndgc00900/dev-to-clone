import React from 'react'
import PropTypes from 'prop-types'
import {
    Header,
    H3,
    useStyles,
    Item,
    Span
} from './card-component.styles'

function CardComponent(props) {
    const { tag, articles } = props;
    const classes = useStyles();
    return (
        <div className={classes.Card}>
            <Header>
                <H3>{tag}</H3>
                {tag === "Listings" && (
                    <a href="/#">
                        <small>
                            see all
                        </small>
                    </a>
                )}
            </Header>
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
        </div>
    );
}

CardComponent.propTypes = {

}

export default CardComponent

