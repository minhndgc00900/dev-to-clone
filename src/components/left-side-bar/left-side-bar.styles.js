import styled from 'styled-components'
import { 
    MAIN_6,
    MAIN_7, 
    MAIN_9, 
    MAIN_A, 
    MAIN_THEME_DARKER 
} from '../../variable';


export const SocialMediaList = styled.div`

`


export const LeftBarMenuList = styled.ul`

`;

export const LeftBarMenuItem = styled.li`
`;


export const LeftBarIcon = styled.i`

`;


export const LeftBarLink = styled.a`

`;

export const LeftBarMore = styled.li`
    font-size: 0.875rem;
    ${LeftBarLink} {
        color: ${MAIN_7};
        padding-left: 5rem;
    };
    display: ${({more}) => more ? 'none' : ''};
`;

export const LeftBarMenu = styled.nav`
    ${LeftBarMenuList} 
    li 
    ${LeftBarLink} {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      color: ${MAIN_9};

      ${LeftBarIcon} {
        font-size: 1.25rem;
        padding-right: 0.5rem;
      }



      &:hover {
        background-color: ${MAIN_A};
        color: ${MAIN_THEME_DARKER};
        border-radius: 5px;
      }
    }


`;

export const LabelName = styled.h3`

`;

export const ListMore = styled.div`
    display: ${({more}) => more ? '' : 'none'};
`;

export const Header = styled.header`

`;

export const TagList = styled.nav`
    ${Header} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
      padding-right: 0;

      ${LabelName} {
        font-size: 1rem;
      }
      ${LeftBarIcon} {
        padding: 0.5rem;
        margin-right: 1rem;
        color: ${MAIN_6};
        font-size: 1.5rem;
        cursor: pointer;
        border-radius: 5px;

        &:hover {
          color: ${MAIN_9};
          background-color: ${MAIN_A};
        }
      }
    }

    ${LeftBarMenuList} {
      height: 40vh;
      overflow-y: auto;
      margin-right: 0.75rem;
      line-height: 1.6;

      ${LeftBarIcon} {
        padding: 0.5rem;
        cursor: pointer;

        &:hover {
          background-color: ${MAIN_A};
          color: ${MAIN_THEME_DARKER};
          border-radius: 5px;
        }
      }
    }
`;

export const LeftBar = styled.aside`

`;