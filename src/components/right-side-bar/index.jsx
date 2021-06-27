import React from 'react'
import CardComponent from './card-component';
import { help, listings, news } from './right-side-bar.configs';
import { Image, Label, Link, useStyles } from './right-side-bar.styles'

function RightSideBar() {
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

            <CardComponent tag="Listings" articles={listings} />

            <CardComponent tag="#news" articles={news} />

             <CardComponent tag="#help" articles={help} />
        </aside>
    )
}

export default RightSideBar
