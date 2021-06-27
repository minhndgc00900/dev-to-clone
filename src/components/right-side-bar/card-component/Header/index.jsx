import React from 'react'
import PropTypes from 'prop-types'

function HeaderComponent(props) {
    const { Header, H3, tag } = props;
    return (
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
    )
}

HeaderComponent.propTypes = {

}

export default HeaderComponent

