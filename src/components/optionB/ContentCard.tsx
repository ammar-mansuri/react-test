import classes from "./OptionB.module.css";
import ThumbnailContentCard from "./ThumbnailContentCard";
import {ContentTitle} from "./ContentTitle";
import {CreatorName} from "./CreatorName";
import {ContentSummary} from "./ContentSummary";
import {PictureLogo} from "./PictureLogo";

export const ContentCard = () => {
    return (
        <div className={classes.contentCard}>
            <div className={classes.thumbnailDiv}>
                <ThumbnailContentCard/>
                <div className={classes.timePosition}>14:00</div>
            </div>
            <div className={classes.detailsGrid}>
                <div className={classes.profilePictureDiv}>
                    <PictureLogo/>
                </div>

                <div className={classes.contentDetailsDiv}>
                    <ContentTitle/>
                    <CreatorName/>
                    <ContentSummary/>
                </div>
            </div>
        </div>
    );
}