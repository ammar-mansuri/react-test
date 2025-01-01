import classes from './OptionBHeaderLeftMenu.module.css'
import hamburgerMenu from "../../icons/hamburger-menu.svg"
import logo from "../../icons/logo.svg"

export const LeftMenu = () => {
    return (
        <>
            <img className={classes.leftBurgerMenu} src={hamburgerMenu} alt="Menu"/>
            <img className={classes.leftMenuLogo} src={logo} alt="Menu"/>
        </>
    )
}