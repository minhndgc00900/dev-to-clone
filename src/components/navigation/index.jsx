import React, { useState } from 'react'
import {
    BtnAdd,
    Container,
    HamburgerMenu,
    Icon,
    Item,
    Link,
    MenuListCotainer,
    MenulistItem,
    Name,
    ProfileInfo,
    ProfilePicture,
    ProfilePictureContainer,
    RightContainer,
    SearchContainer,
    SearchForm,
    SearchIcon,
    SearchInput,
    UserName,
    Wrapper
} from './navigation.styles'
import { FaDev } from 'react-icons/fa'
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";

function Navigation(props) {
    const { openMenu } = props;
    const [hasMenu, setHasMenu] = useState(false);
    const onHandleToggle = () => {
        setHasMenu(prev => !prev)
    };

    console.log(212, hasMenu);

    return (
        <>
            <Wrapper>
                <Container>
                    <HamburgerMenu onClick={() => openMenu()}>
                    </HamburgerMenu>
                    <Link href='https://dev.to'>
                        <FaDev size="3.125rem" />
                    </Link>

                    <SearchContainer>
                        <SearchForm>
                            <SearchInput
                                type='text'
                                placeholder='Search...'
                                aria-label='search'
                            />
                        </SearchForm>
                    </SearchContainer>

                    <RightContainer>
                        <BtnAdd>
                            Write a post
                        </BtnAdd>
                        <Icon>
                            <SearchIcon />
                            {/* <FiSearch /> */}
                        </Icon>
                        <Icon>
                            <BiMessageRoundedCheck />
                        </Icon>
                        <Icon>
                            <RiNotificationLine />
                        </Icon>

                        <ProfilePictureContainer onClick={() => onHandleToggle()}>
                            <ProfilePicture
                                src='https://picsum.photos/200'
                                alt='Profile Picture'
                            />
                        </ProfilePictureContainer>
                    </RightContainer>

                    <MenuListCotainer hasMenu={hasMenu}>
                        <MenulistItem>
                            <Item>
                                <Link href="/profile">
                                    <ProfileInfo>
                                        <Name>Minh Nguyen</Name>
                                        <UserName>@minhnguyen3743</UserName>
                                    </ProfileInfo>
                                </Link>
                            </Item>
                            <Item onClick={() => onHandleToggle()}>
                                <Link href="/dashboard">Dashboard</Link>
                            </Item>
                            <Item onClick={() => onHandleToggle()}>
                                <Link href="/post">Writing a Post</Link>
                            </Item>
                            <Item onClick={() => onHandleToggle()}>
                                <Link href="/list">Reading list</Link>
                            </Item>
                            <Item onClick={() => onHandleToggle()}>
                                <Link href="/settings">Settings</Link>
                            </Item>
                            <Item onClick={() => onHandleToggle()}>
                                <Link href="/signout">Signout</Link>
                            </Item>
                        </MenulistItem>
                    </MenuListCotainer>
                </Container>
            </Wrapper>
        </>
    )
}

export default Navigation
