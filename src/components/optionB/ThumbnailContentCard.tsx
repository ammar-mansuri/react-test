import {faker} from '@faker-js/faker';
import classes from './OptionB.module.css'

const ThumbnailContentCard = () => {
    return (
        <img className={classes.thumbnail} src={faker.image.url({width: 300, height: 300})} alt="thumbnail"/>
    );
};

export default ThumbnailContentCard;