import { makeStyles } from "@material-ui/styles";
import { MAIN_THEME } from "../../variable";

const useStyles = makeStyles({
    headerContent: {
        display: 'flex',
        alignTtems: 'center',
        padding: '0.5rem 0',
    },
    labelName: {
        fontSize: '1.25rem',
        flex: 1
    },
    horizontalNavigation: {
        '& a': {
            margin: '0 0.5rem',
            padding: '0.5rem',
            borderRadius: '5px',
            '&:hover': {
                backgroundColor: 'rgba(#3b49df, 0.1)',
                color: MAIN_THEME,
            },
            '&:first-child': {
                border: 'none',
                position: 'relative',
                fontWeight: '700',
                '&:after': {
                    content: '""',
                    height: '3px',
                    backgroundColor: MAIN_THEME,
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    borderRadius: '5px',
                    margin: '0 0.5rem',
                    transition: 'all 0.2s',
                },
                '&:hover:after': {
                    margin: '0',
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                }   
            }
        },
    }
});

export { useStyles }