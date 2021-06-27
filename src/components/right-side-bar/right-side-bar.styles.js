import { makeStyles, styled } from '@material-ui/styles';
import { MAIN_0, MAIN_THEME } from '../../variable';

const useStyles = makeStyles({
    rightBar: {
        display: 'flex',
        flexDirection: 'column'
    },

    hackathon: {
        backgroundColor: MAIN_0,
        padding: '1rem',
        borderRadius: '5px',
        lineHeight: 1.5,
        height: 'max-content',
    }

});

const Image = styled('img')({
    width: '100%',
    height: 'auto',
    maxHeight: '100px',
    borderRadius: '5px',
    display: 'inline-block',
    marginBottom: '1rem',
});

const Link = styled('a')({
    color: MAIN_THEME
})

const Label = styled('p')({
    color: MAIN_THEME
})

export { 
    useStyles,
    Image,
    Link,
    Label
};