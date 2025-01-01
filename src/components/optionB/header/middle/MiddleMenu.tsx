import {SearchBar} from "./SearchBar";
import classes from "./OptionBHeaderMiddleMenu.module.css";
import searchLogo from "../../icons/search.svg";
import voiceSearchLogo from "../../icons/voice-search-icon.svg";

export const MiddleMenu = () => {

    return (
        <>
            <SearchBar/>
            <button className={classes.searchButton}>
                <img className={classes.searchButtonLogo} src={searchLogo} alt={'Search'}/>
                <div className={classes.searchVideoTooltip}> Search</div>
            </button>
            <button className={classes.voiceSearchButton}>
                <img className={classes.voiceSearchButtonLogo} src={voiceSearchLogo} alt={'Search'}/>
            </button>
        </>
    )
}