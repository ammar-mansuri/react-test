import {ContentGrid} from "../../components/optionB/ContentGrid";
import {Header} from "../../components/optionB/header/Header";
import {Sidebar} from "../../components/optionB/sidebar/Sidebar";

export function OptionBPage() {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <ContentGrid/>
        </div>
    );
}