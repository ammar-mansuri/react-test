import classes from './OptionBHeader.module.css'
import {LeftMenu} from "./left/LeftMenu";
import {RightMenu} from "./right/RightMenu";
import {MiddleMenu} from "./middle/MiddleMenu";

export const Header = () => {

    return (
        <div className={classes.headerMain}>
            <div className={classes.headerLeft}>
                <LeftMenu/>
            </div>
            <div className={classes.headerMiddle}>
                <MiddleMenu/>
            </div>
            <div className={classes.headerRight}>
                <RightMenu/>
            </div>
        </div>
    )
}