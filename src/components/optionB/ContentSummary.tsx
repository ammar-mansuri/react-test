import {faker} from '@faker-js/faker';
import classes from './OptionB.module.css'

export const ContentSummary = () => {
    return (
        <p className={classes.summary}>{faker.date.recent().toDateString()}</p>
    );
}