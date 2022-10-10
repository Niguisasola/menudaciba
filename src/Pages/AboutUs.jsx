import Header from "../Components/Header";
import MainUS from "../Components/AboutUs/MainUs";
import FooterUs from "../Components/AboutUs/FooterUs";

function AboutUs(){
    return(
        <div>
            <Header/>
                <div className="w-auto">
                         <MainUS/>
                    <div className="w-auto flex  pt-20">
                         <FooterUs/>
                     </div>
                </div>
        </div>
    )
}
export default AboutUs;