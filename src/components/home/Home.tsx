import {AppShell} from '@mantine/core';
import {Header} from "./Header";

export function Home() {
    return (
        <>
            <AppShell>
                <Header/>

                <AppShell.Main>
                    Hello
                </AppShell.Main>
            </AppShell>

        </>
    );
}

