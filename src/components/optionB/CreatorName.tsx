import {faker} from "@faker-js/faker";
import classes from './OptionB.module.css'

export const CreatorName = () => {
    return (
        <p className={classes.creator}>{faker.internet.displayName()}</p>
    );
}