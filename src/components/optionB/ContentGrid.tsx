import classes from "./OptionB.module.css";
import {ContentCard} from "./ContentCard";

export const ContentGrid = () => {
    const randomNumber = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    return (
        <div className={classes.contentGridBody}>
            <div className={classes.contentMainGrid}>
                {Array.from({length: randomNumber}).map((value, index) => (
                    <ContentCard key={index}/>
                ))}
            </div>
        </div>
    );
}