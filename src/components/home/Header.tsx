import {AppShellHeader, Button, Group} from "@mantine/core";
import {Link} from "react-router-dom";
import {Routes} from "../../routes/Routes";

export function Header() {
    return (
        <AppShellHeader>
            <Group>
                <Button component={Link} to={Routes.HOME}>
                    Home
                </Button>
            </Group>
        </AppShellHeader>
    )
}