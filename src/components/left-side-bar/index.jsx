import React, { useState } from "react"
import {
    FcHome,
    FcReading,
    FcTodoList,
    FcVideoCall,
    FcAbout,
    FcIdea,
    FcShop,
    FcLike,
    FcBriefcase,
    FcDisclaimer,
    FcBusinessContact,
} from "react-icons/fc"
import { AiFillAudio } from "react-icons/ai"
import { FaTags, FaDev } from "react-icons/fa"
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io"
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri"
import { CgShapeHexagon } from "react-icons/cg"
import { GrFormClose } from "react-icons/gr"
import {
    Hamburger,
    HamburgerContent,
    HamburgerContentItem,
    HamburgerOverLay,
    Header,
    LabelName,
    LeftBar,
    LeftBarIcon,
    LeftBarLink,
    LeftBarMenu,
    LeftBarMenuItem,
    LeftBarMenuList,
    LeftBarMore,
    ListMore,
    SocialMediaList,
    TagList
} from "./left-side-bar.styles"
import { tags } from './left-side-bar.configs'

function LeftSideBar(props) {
    const { burgerMenu = false } = props;
    const [more, setMore] = useState(false);
    const onHandleToggle = () => {
        setMore(prev => !prev);
    }

    // const []

    return (
        <>
            <LeftBar>
                <LeftBarMenu>
                    <LeftBarMenuList>
                        <LeftBarMenuItem>
                            <LeftBarLink href='/home'>
                                <LeftBarIcon>
                                    <FcHome />
                                </LeftBarIcon>
                                Home
                            </LeftBarLink>
                        </LeftBarMenuItem>
                        <LeftBarMenuItem>
                            <LeftBarLink href='/reading'>
                                <LeftBarIcon>
                                    <FcReading />
                                </LeftBarIcon>
                                Reading
                            </LeftBarLink>
                        </LeftBarMenuItem>

                        <LeftBarMenuItem>
                            <LeftBarLink href='/listings'>
                                <LeftBarIcon>
                                    <FcTodoList />
                                </LeftBarIcon>
                                Listings
                            </LeftBarLink>
                        </LeftBarMenuItem>
                        <LeftBarMenuItem>
                            <LeftBarLink href='/podcast'>
                                <LeftBarIcon>
                                    <AiFillAudio />
                                </LeftBarIcon>
                                Podcast
                            </LeftBarLink>
                        </LeftBarMenuItem>
                        <LeftBarMenuItem>
                            <LeftBarLink href='/videos'>
                                <LeftBarIcon>
                                    <FcVideoCall />
                                </LeftBarIcon>
                                Videos
                            </LeftBarLink>
                        </LeftBarMenuItem>
                        <LeftBarMenuItem>
                            <LeftBarLink href='/tags'>
                                <LeftBarIcon>
                                    <FaTags />
                                </LeftBarIcon>
                                Tags
                            </LeftBarLink>
                        </LeftBarMenuItem>

                        <LeftBarMore more={more}>
                            <LeftBarIcon>
                            </LeftBarIcon>
                            <LeftBarLink
                                href='#'
                                onClick={() => onHandleToggle()}>
                                More...
                            </LeftBarLink>
                        </LeftBarMore>

                        <ListMore more={more}>
                            <LeftBarMenuItem>
                                <LeftBarLink href="/code">
                                    <LeftBarIcon>
                                        <FcAbout />
                                    </LeftBarIcon>
                                    Code of Conduct
                                </LeftBarLink>
                            </LeftBarMenuItem>
                            <LeftBarMenuItem>
                                <LeftBarLink href="/FAQ">
                                    <LeftBarIcon>
                                        <FcIdea />
                                    </LeftBarIcon>
                                    FAQ
                                </LeftBarLink>
                            </LeftBarMenuItem>
                            <LeftBarMenuItem>
                                <LeftBarLink href="/DEV">
                                    <LeftBarIcon>
                                        <FcShop />
                                    </LeftBarIcon>
                                    DEV Shop
                                </LeftBarLink>
                            </LeftBarMenuItem>
                            <LeftBarMenuItem>
                                <LeftBarLink href="/sponsors">
                                    <LeftBarIcon>
                                        <FcLike />
                                    </LeftBarIcon>
                                    Sponsors
                                </LeftBarLink>
                            </LeftBarMenuItem>
                            <LeftBarMenuItem>
                                <LeftBarLink href="/about">
                                    <LeftBarIcon>
                                        <FaDev />
                                    </LeftBarIcon>
                                    About
                                </LeftBarLink>
                            </LeftBarMenuItem>
                            <LeftBarMenuItem>
                                <LeftBarLink href="/privacy">
                                    <LeftBarIcon>
                                        <FcBriefcase />
                                    </LeftBarIcon>
                                    Privacy Policy
                                </LeftBarLink>
                            </LeftBarMenuItem>
                            <LeftBarMenuItem>
                                <LeftBarLink href="/terms">
                                    <LeftBarIcon>
                                        <FcDisclaimer />
                                    </LeftBarIcon>
                                    Terms of use
                                </LeftBarLink>
                            </LeftBarMenuItem>
                            <LeftBarMenuItem>
                                <LeftBarLink href="/contact">
                                    <LeftBarIcon>
                                        <FcBusinessContact />
                                    </LeftBarIcon>
                                    Contact
                                </LeftBarLink>
                            </LeftBarMenuItem>
                        </ListMore>
                    </LeftBarMenuList>
                </LeftBarMenu>

                <SocialMediaList more={more}>
                    <LeftBarLink href='/twitter'>
                        <LeftBarIcon>
                            <IoLogoTwitter />
                        </LeftBarIcon>
                    </LeftBarLink>
                    <LeftBarLink href='/facebook'>
                        <LeftBarIcon>
                            <IoLogoFacebook />
                        </LeftBarIcon>
                    </LeftBarLink>
                    <LeftBarLink href='/github'>
                        <LeftBarIcon>
                            <IoLogoGithub />
                        </LeftBarIcon>
                    </LeftBarLink>
                    <LeftBarLink href='/instagram'>
                        <LeftBarIcon>
                            <RiInstagramFill />
                        </LeftBarIcon>
                    </LeftBarLink>
                    <LeftBarLink href='/twitch'>
                        <LeftBarIcon>
                            <RiTwitchLine />
                        </LeftBarIcon>
                    </LeftBarLink>
                </SocialMediaList>

                <TagList>
                    <Header>
                        <LabelName>
                            <CgShapeHexagon />
                        </LabelName>
                        <LeftBarIcon>

                        </LeftBarIcon>
                    </Header>
                    <LeftBarMenuList>
                        {tags.map((tag, id) => {
                            return (
                                <LeftBarMenuItem key={id}>
                                    <LeftBarLink href="/#">
                                        #{tag}
                                    </LeftBarLink>
                                </LeftBarMenuItem>
                            );
                        })}
                    </LeftBarMenuList>
                </TagList>
            </LeftBar>

            {burgerMenu && (
                <Hamburger>
                    <HamburgerContent>
                        <Header>
                            <h2>Dev Community</h2>
                            <buttom>
                                <GrFormClose />
                            </buttom>
                        </Header>
                        <HamburgerContentItem>
                            <LeftBarMenu>
                                <LeftBarMenuList>
                                    <LeftBarMenuItem>
                                        <LeftBarLink href="/home">
                                            <LeftBarIcon>
                                                <FcHome />
                                            </LeftBarIcon>
                                        </LeftBarLink>
                                    </LeftBarMenuItem>
                                    <LeftBarMenuItem>
                                        <LeftBarLink href='/reading'>
                                            <LeftBarIcon>
                                                <FcReading />
                                            </LeftBarIcon>
                                            Reading
                                        </LeftBarLink>
                                    </LeftBarMenuItem>

                                    <LeftBarMenuItem>
                                        <LeftBarLink href='/listings'>
                                            <LeftBarIcon>
                                                <FcTodoList />
                                            </LeftBarIcon>
                                            Listings
                                        </LeftBarLink>
                                    </LeftBarMenuItem>
                                    <LeftBarMenuItem>
                                        <LeftBarLink href='/podcast'>
                                            <LeftBarIcon>
                                                <AiFillAudio />
                                            </LeftBarIcon>
                                            Podcast
                                        </LeftBarLink>
                                    </LeftBarMenuItem>
                                    <LeftBarMenuItem>
                                        <LeftBarLink href='/videos'>
                                            <LeftBarIcon>
                                                <FcVideoCall />
                                            </LeftBarIcon>
                                            Videos
                                        </LeftBarLink>
                                    </LeftBarMenuItem>
                                    <LeftBarMenuItem>
                                        <LeftBarLink href='/tags'>
                                            <LeftBarIcon>
                                                <FaTags />
                                            </LeftBarIcon>
                                            Tags
                                        </LeftBarLink>
                                    </LeftBarMenuItem>
                                    <LeftBarMore more={more}>
                                        <LeftBarIcon>
                                        </LeftBarIcon>
                                        <LeftBarLink
                                            href='/#'
                                            onClick={() => onHandleToggle()}>
                                            More...
                                        </LeftBarLink>
                                    </LeftBarMore>

                                    <ListMore more={more}>
                                        <LeftBarMenuItem>
                                            <LeftBarLink href="/code">
                                                <LeftBarIcon>
                                                    <FcAbout />
                                                </LeftBarIcon>
                                                Code of Conduct
                                            </LeftBarLink>
                                        </LeftBarMenuItem>
                                        <LeftBarMenuItem>
                                            <LeftBarLink href="/FAQ">
                                                <LeftBarIcon>
                                                    <FcIdea />
                                                </LeftBarIcon>
                                                FAQ
                                            </LeftBarLink>
                                        </LeftBarMenuItem>
                                        <LeftBarMenuItem>
                                            <LeftBarLink href="/DEV">
                                                <LeftBarIcon>
                                                    <FcShop />
                                                </LeftBarIcon>
                                                DEV Shop
                                            </LeftBarLink>
                                        </LeftBarMenuItem>
                                        <LeftBarMenuItem>
                                            <LeftBarLink href="/sponsors">
                                                <LeftBarIcon>
                                                    <FcLike />
                                                </LeftBarIcon>
                                                Sponsors
                                            </LeftBarLink>
                                        </LeftBarMenuItem>
                                        <LeftBarMenuItem>
                                            <LeftBarLink href="/about">
                                                <LeftBarIcon>
                                                    <FaDev />
                                                </LeftBarIcon>
                                                About
                                            </LeftBarLink>
                                        </LeftBarMenuItem>
                                        <LeftBarMenuItem>
                                            <LeftBarLink href="/privacy">
                                                <LeftBarIcon>
                                                    <FcBriefcase />
                                                </LeftBarIcon>
                                                Privacy Policy
                                            </LeftBarLink>
                                        </LeftBarMenuItem>
                                        <LeftBarMenuItem>
                                            <LeftBarLink href="/terms">
                                                <LeftBarIcon>
                                                    <FcDisclaimer />
                                                </LeftBarIcon>
                                                Terms of use
                                            </LeftBarLink>
                                        </LeftBarMenuItem>
                                        <LeftBarMenuItem>
                                            <LeftBarLink href="/contact">
                                                <LeftBarIcon>
                                                    <FcBusinessContact />
                                                </LeftBarIcon>
                                                Contact
                                            </LeftBarLink>
                                        </LeftBarMenuItem>
                                    </ListMore>
                                </LeftBarMenuList>
                            </LeftBarMenu>
                            <SocialMediaList more={more}>
                                <LeftBarLink href='/twitter'>
                                    <LeftBarIcon>
                                        <IoLogoTwitter />
                                    </LeftBarIcon>
                                </LeftBarLink>
                                <LeftBarLink href='/facebook'>
                                    <LeftBarIcon>
                                        <IoLogoFacebook />
                                    </LeftBarIcon>
                                </LeftBarLink>
                                <LeftBarLink href='/github'>
                                    <LeftBarIcon>
                                        <IoLogoGithub />
                                    </LeftBarIcon>
                                </LeftBarLink>
                                <LeftBarLink href='/instagram'>
                                    <LeftBarIcon>
                                        <RiInstagramFill />
                                    </LeftBarIcon>
                                </LeftBarLink>
                                <LeftBarLink href='/twitch'>
                                    <LeftBarIcon>
                                        <RiTwitchLine />
                                    </LeftBarIcon>
                                </LeftBarLink>
                            </SocialMediaList>

                        </HamburgerContentItem>
                    </HamburgerContent>
                    <HamburgerOverLay>                       
                    </HamburgerOverLay>
                </Hamburger>
            )}
        </>
    )
}

export default LeftSideBar
