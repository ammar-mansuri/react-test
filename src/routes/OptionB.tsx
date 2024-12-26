import {Routes} from "./Routes";
import {OptionAPage} from "pages/optionA/OptionAPage";
import {OptionBPage} from "../pages/optionB/OptionBPage";


export const OptionBRoutes = {
    path: Routes.OPTIONB,
    children: [
        {
            index: true,
            element: <OptionBPage/>
        }
    ]
}