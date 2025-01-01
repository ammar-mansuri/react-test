import {AppShell, Box, Title} from '@mantine/core';
import {Header} from "./Header";
import {Outlet} from "react-router-dom";

export function Home() {
    return (
        <>
            <AppShell>
                <Header/>
                {/*<AppShell.Navbar p="md">
                    Navbar
                    {Array(15)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} h={28} mt="sm" animate={false}/>
                        ))}
                </AppShell.Navbar>
                */}
                <AppShell.Main pt='xl'>
                    <Box ml='xs' mr='xs' mt='xs' mb='xs'>
                        <Outlet/>
                    </Box>
                </AppShell.Main>
            </AppShell>

        </>
    );
}

