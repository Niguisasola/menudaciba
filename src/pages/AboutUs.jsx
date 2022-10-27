import MainUS from "../components/AboutUs/MainUs";
import FooterUs from "../components/AboutUs/FooterUs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function AboutUs() {
    return (
        <div className='grid grid-rows-[auto_auto_1fr_auto] h-screen'>
            <Header />
            <MainUS />
            <FooterUs />
            <Footer />
        </div>
    )
}
export default AboutUs;