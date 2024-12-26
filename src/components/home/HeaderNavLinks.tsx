import {Group, NavLink} from "@mantine/core";
import {Link} from "react-router-dom";
import {Routes} from "../../routes/Routes";

export function HeaderNavLinks() {
    return (
        <Group justify='flex-start' wrap='nowrap'>
            <NavLink component={Link} to={Routes.OPTIONA} label='OptionA'/>
            <NavLink component={Link} to={Routes.OPTIONB} label='OptionB'/>
        </Group>
    );
}