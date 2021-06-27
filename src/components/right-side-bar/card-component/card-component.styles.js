import { makeStyles, styled } from "@material-ui/styles";
import { MAIN_0, MAIN_1, MAIN_6, MAIN_THEME, MAIN_THEME_DARKER } from "../../../variable";

const useStyles = makeStyles({
    Card: {
        margin: '1rem 0',
        backgroundColor: MAIN_0,
        borderRadius: '5px',
        lineHeight: '1.5',
        height: 'max-content'
    },
});

const Header = styled('header')({
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    '& a': {
        ' & small': {
            color: MAIN_THEME,
            fontSize: '0.875rem',
        }
    }
});

const H3 = styled('h3')({
    fontSize: '1.25rem',
    flex: '1'
});

// const Small = styled('small')({
//     color: MAIN_THEME,
//     fontSize: '0.875rem',
// });

const Item = styled('li')({
    display: 'block',
    padding: '1rem',
    borderTop: `1px solid ${MAIN_1}`,
    borderBottom: `1px solid ${MAIN_1}`,
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
        backgroundColor: '#fff',
        color: MAIN_THEME_DARKER,
    },
    ' & small': {
        color: MAIN_6
    }
});

const Span = styled('span')({
    backgroundColor: MAIN_THEME,
      color: '#fff',
      fontSize: '0.75rem',
      padding: '0.25rem',
      borderRadius: '5px',
      marginTop: '5px',
})

export {
    useStyles,
    Header,
    H3,
    // Small,
    Span,
    Item
}

// .card {
//     margin: 1rem 0;
//     background-color: var(--main-0);

//     border-radius: 5px;
//     line-height: 1.5;

//     height: max-content;

//     header {
//       display: flex;
//       align-items: center;
//       padding: 0.5rem 1rem;

//       h3 {
//         font-size: 1.25rem;
//         flex: 1;
//       }
//       small {
//         color: var(--main-theme);
//         font-size: 0.875rem;
//       }
//     }

//     li {
//       display: block;
//       padding: 1rem;
//       border-top: 1px solid var(--main-1);
//       border-bottom: 1px solid var(--main-1);
//       cursor: pointer;
//       transition: all 0.2s;
//       &:hover {
//         background-color: #fff;
//         color: var(--main-theme-darker);
//       }
//     }

//     small {
//       color: var(--main-6);
//     }

//     span {
//       background-color: var(--main-theme);
//       color: #fff;
//       font-size: 0.75rem;
//       padding: 0.25rem;
//       border-radius: 5px;
//       margin-top: 5px;
//     }
//   }