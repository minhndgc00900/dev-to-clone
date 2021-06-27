import styled from 'styled-components/macro'
import { 
    FONT_COLOR, 
    HEADER_BG, 
    HEADER_HEIGHT, 
    MAIN_2, 
    MAIN_5, 
    MAIN_A, 
    MAIN_THEME_DARKER } from '../../variable';
import { FiSearch } from "react-icons/fi";


export const Wrapper = styled.header`
  max-width: 100%;
  background-color: ${HEADER_BG};

  display: flex;

  height: 56px;
  padding: 1rem 20rem;

  @media only screen and (max-width:1536px){
    padding: 1rem 8rem;
  }

  @media only screen and (max-width:1450px){
    position: absolute;
    right: 0;
    left: 0;
    padding: 1rem 3rem;
    ul li {
      padding: 1rem;
    }
  }
`;
export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 1280px;
    width: 100%;
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

export const Link = styled.a`
    color: black;
    display: flex;
    align-items: center;
`;

export const SearchContainer = styled.div`
    max-width: 420px;
    flex: 1 auto;
    margin: 0 1rem;

    @media only screen and (max-width:1300px){
        display: none;
    }
`;

export const SearchForm = styled.form`

`;

export const SearchInput = styled.input`
    outline: 0;

    background-color: #f9fafa;

    padding: 0.6rem;
    border-radius: 5px;
    font-size: 1rem;
    border: 1px solid #b5bdc4;
    width: 100%;

    &:focus {
        background-color: #fff;
        box-shadow: 1px 1px #3b49df;
    }
`;

export const Icon = styled.i`
    margin: 0 1rem;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    color: #363d44;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 10px rgba(#000000, 0.05);
      background-color: rgba(#000000, 0.05);
      color: #08090a;
      z-index: 1;
    }
`;

export const BtnAdd = styled.button`
    background-color: #3b49df;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-right: 0.5rem;

    &:hover {
      background-color: #1827ce;
    }

    @media only screen and (max-width:1300px){
        display: none;
    }
`;

export const ProfilePictureContainer = styled.span`
    height: 2rem;
    width: 2rem;
    margin: 0 1rem;
`;

export const ProfilePicture = styled.img`
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: inline-block;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 0 5px rgba(#000000, 0.05);
      }
`;

export const MenuListCotainer = styled.div`
    position: absolute;
    top: ${HEADER_HEIGHT};
    right: 10rem;
    left: auto;
    display: ${({ hasMenu }) => !hasMenu ? 'none' : ''};
    background: ${HEADER_BG};
    border: 2px solid ${FONT_COLOR};
    box-shadow: 4px 4px 0 ${FONT_COLOR};
    border-radius: 5px;

    min-width: 250px;
    z-index: 4;

    @media only screen and (max-width:1450px){
        right: 10px;
    }

    @media only screen and (max-width:640px){
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 0.5rem;
        ul li {
            padding: 1rem;
        }
  }
`;

export const ProfileInfo = styled.div`

`;

export const MenulistItem = styled.ul`

`;

export const Item = styled.li`
    padding: 0.5rem;
    cursor: pointer;
    line-height: 1.6;
    transition: all 0.2s;

    &:first-child {
        border-bottom: 1px solid ${MAIN_2};
        padding: 0.7rem;
      }
    
    &:last-child {
        border-top: 1px solid ${MAIN_2};
      }
    &:hover {
        background-color: ${MAIN_A};
        color: ${MAIN_THEME_DARKER};
      }
`;

export const Name = styled.div`

`;

export const UserName = styled.small`
    color: ${MAIN_5};
`;

export const HamburgerMenu = styled.div`
    display: none;
    background-color: ${FONT_COLOR};
    height: 2px;
    width: 1.2rem;
    cursor: pointer;
    margin-right: 1rem;

    &:before,
    &:after {
        content: "";
        background-color: ${FONT_COLOR};
        height: 2px;
        width: 1.2rem;
        cursor: pointer;
        display: block;
    }

    &:before {
        transform: translateY(-7px);
    }

    &:after {
        transform: translateY(5px);
    }

    @media only screen and (max-width:768px){
        display: block;
    }
`
export const SearchIcon = styled(FiSearch)`
    @media only screen and (max-width:768px){
        display: flex;
    }
`