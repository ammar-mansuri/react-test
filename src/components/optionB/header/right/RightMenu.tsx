import classes from "./OptionBHeaderRightMenu.module.css";
import upload from "../../icons/upload.svg";
import apps from "../../icons/apps.svg";
import notifications from "../../icons/notifications.svg";
import {faker} from '@faker-js/faker';

export const RightMenu = () => {
    return (
        <>
            <img className={classes.uploadLogo} src={upload} alt="Upload"/>
            <img className={classes.appsLogo} src={apps} alt="Apps"/>
            <div className={classes.notificationsDiv}>
                <img className={classes.notificationsLogo} src={notifications} alt="Notifications"/>
                <div className={classes.notificationsCount}>3</div>
            </div>
            <img className={classes.profileIconLogo} src={faker.image.avatar()} alt="Profile"/>
        </>
    )
}