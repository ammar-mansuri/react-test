import {faker} from "@faker-js/faker";
import classes from './OptionB.module.css'

export const ContentTitle = () => {
    return (
        <p className={classes.title}>{faker.food.description().substring(0, 50)}</p>
    );
}