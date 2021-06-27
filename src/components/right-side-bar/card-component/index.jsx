import React from 'react'
import PropTypes from 'prop-types'
import {
    Header,
    H3,
    useStyles,
    Item,
    Span
} from './card-component.styles'
import HeaderComponent from './Header';
import Content from './Content';

function CardComponent(props) {
    const { tag, articles } = props;
    const classes = useStyles();
    return (
        <div className={classes.Card}>
            <HeaderComponent 
                H3={H3}
                Header={Header} 
                tag={tag}
            />
            <Content
                Item={Item}
                Span={Span}
                articles={articles}
            />
        </div>
    );
}

CardComponent.propTypes = {

}

export default CardComponent

