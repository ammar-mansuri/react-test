import {faker} from '@faker-js/faker';
import classes from './OptionB.module.css'

export const PictureLogo = () => {
    return (
        <img className={classes.pictureLogo} src={faker.image.avatar()}/>
    );
}