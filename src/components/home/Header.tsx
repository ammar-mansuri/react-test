import {AppShellHeader, Button, Group, Box} from "@mantine/core";
import {Link} from "react-router-dom";
import {Routes} from "../../routes/Routes";
import {HeaderNavLinks} from "./HeaderNavLinks";

export function Header() {
    return (
        <AppShellHeader>
            <Group justify='space-between'>
                <Button component={Link} to={Routes.HOME}>
                    Home
                </Button>

                <Box><HeaderNavLinks/></Box>
            </Group>
        </AppShellHeader>
    )
}