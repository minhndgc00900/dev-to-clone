import { makeStyles } from "@material-ui/styles";
import { FONT_COLOR, MAIN_2, MAIN_3, MAIN_6, MAIN_8, MAIN_A, MAIN_THEME } from "../../../variable";

const useStyles = makeStyles({
    article: {
        marginTop: '0.5rem',
        backgroundColor: '#fff',
        boxShadow: `0 0 0 1px ${MAIN_A}`,
        borderRadius: '5px',
        marginBottom: '1rem',
        '&:not(:first-child)': {
            '& > a': {
                display: 'none'
            }
        },
    },
    acticleImage:{
        display: 'block',
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingBottom: '40%',
        borderRadius: '5px 5px 0 0',
    },
    details: {
        display: 'flex',
        padding: '1rem',
        position: 'relative',
    },
    uPic: {
        display: 'block',
        width: '2rem',
        '& > img': {
            borderRadius: '50%',
            width: '100%',
        }
    },
    uDetails: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '0.5rem',
        marginBottom: '0.5rem',
    },
    uInfo: {
        fontSize: '0.875rem',
        color: MAIN_6,

        '&:hover': {
            color: MAIN_8,
        }
    },
    tags: {
        marginTop: '1rem',
        display: 'flex',
        flexWrap: 'wrap',

    },
    tag: {
        fontSize: '0.875rem',
        padding: '0.2rem',
        color: MAIN_6,
        '&:hover': {
            color: FONT_COLOR
        }
    },
    title: {
        marginTop: '1rem',
        fontSize: '1.5rem',
        '&:hover': {
            color: MAIN_THEME,
        }
    },
    addtionalDetails: {
        marginTop: '1rem',
        fontSize: ' 0.875rem',
        display: 'flexDirection',
        alignItems: 'center',
    },
    reactions: {
        flex: '1',

        '& > a': {
            padding: '0.5rem 1rem',
            color: MAIN_8,
            borderRadius: '5px',
            '&:first-child': {
                marginLeft: '-1rem',
            },

            '&:hover': {
                color: FONT_COLOR,
                backgroundColor: 'rgba(0, 0, 0, 0.03)',
            }
        }
    },
    save: {
        position: 'absolute',
        right: '0',
        marginLeft: '1rem',
        paddingRight: '1rem',
        marginTop: '-1rem',
        '& > small': {
            color: MAIN_6,
            marginRight: '0.5rem',
        },
        '& > button': {
            padding: '0.3rem 0.8rem',
            borderRadius: '5px',
            color: MAIN_6,
            backgroundColor: MAIN_2,
            transition: 'all 0.2s',
            '&:hover': {
                color: MAIN_8,
                backgroundColor: MAIN_3,
            }
        }
    },
    showMobile: {
        display: 'none'
    }
});

export { useStyles }