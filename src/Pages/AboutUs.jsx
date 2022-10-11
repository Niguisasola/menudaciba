import Header from "../Components/Extras/Header";
import MainUS from "../Components/AboutUs/MainUs";
import FooterUs from "../Components/AboutUs/FooterUs";
import Footer from "../Components/Footer/Footer";

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
            <Footer/>
        </div>
    )
}
export default AboutUs;