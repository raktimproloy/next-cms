
// Home page json
import HomeAboutProgress from "@/store/json/homePage/homeAbout.json"
import HomeCounter from "@/store/json/homePage/homeCounter.json"

// Shared Json
import Testimonial from "@/store/json/shared/testimonial/testimonial.json"
interface Props{
    dataName: string
}

type FunctionType = (data: Array<Object>) => void
export function GetJsonData({dataName}: Props, callback: FunctionType){
    switch (dataName) {
        case "homeAboutProgress":
            callback(HomeAboutProgress.data)
            break;

        case "homeCounter":
            callback(HomeCounter.data)
            break;

        case "testimonial":
            callback(Testimonial.data)
            break;

        default:
            break;
    }
}
