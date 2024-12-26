import {Routes} from "./Routes";
import {OptionAPage} from "pages/optionA/OptionAPage";


export const OptionARoutes = {
    path: Routes.OPTIONA,
    children: [
        {
            index: true,
            element: <OptionAPage/>
        }
    ]
}