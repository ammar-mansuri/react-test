import classes from './OptionBSidebar.module.css'
import home from "../icons/home.svg";
import explore from "../icons/explore.svg";
import subs from "../icons/subscriptions.svg";
import original from "../icons/originals.svg";
import music from "../icons/music.svg";
import library from "../icons/library.svg";

export const Sidebar = () => {
    return (
        <nav className={classes.sidebarMain}>
            <div className={classes.sideMenuLinks}>
                <img src={home} alt="home"/>
                <p>Home</p>
            </div>
            <div className={classes.sideMenuLinks}>
                <img src={explore} alt="explore"/>
                <p>Explore</p>
            </div>
            <div className={classes.sideMenuLinks}>
                <img src={subs} alt="subs"/>
                <p>Subscriptions</p>
            </div>
            <div className={classes.sideMenuLinks}>
                <img src={original} alt="original"/>
                <p>Originals</p>
            </div>
            <div className={classes.sideMenuLinks}>
                <img src={music} alt="music"/>
                <p>Music</p>
            </div>
            <div className={classes.sideMenuLinks}>
                <img src={library} alt="library"/>
                <p>Library</p>
            </div>
        </nav>
    )
}