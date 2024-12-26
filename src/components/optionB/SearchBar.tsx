import classes from './OptionB.module.css'

export const SearchBar = () => {
    return (
        <input className={classes.searchBar} placeholder='Search' type={"text"}/>
    );
}