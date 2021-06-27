import React, { useContext } from 'react';
import { CreatedHomePageContext } from '../../pages/home-page';
import CardComponent from './card-component';
import { Image, Label, Link, useStyles } from './right-side-bar.styles';


function RightSideBar() {
    const HomePageContext = useContext(CreatedHomePageContext);
    const classes = useStyles();
    return (
        <aside className={classes.rightBar}>
            <div className={classes.hackathon}>
                <Label>
                    <Image src="https://picsum.photos/200/300" alt="" />
                </Label>
                <h2>
                    <a href="/#">"Hack the Planet" with New Relic & DEV</a>
                </h2>

                <Label>
                    Use New Relic to build a climate-change observability app for the
                    chance to win up to $5,000!
                    <strong>
                        <Link href="/#">&nbsp;join the hackathon</Link>
                    </strong>
                </Label>
            </div>

            <CardComponent tag="Listings" articles={HomePageContext.listings} />

            <CardComponent tag="#news" articles={HomePageContext.news} />

            <CardComponent tag="#help" articles={HomePageContext.help} />
        </aside>
    )
}

export default RightSideBar
