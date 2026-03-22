import ConverterWidget from "../components/ConverterWidget";
import LocationSection from "../components/LocationSection";
import AboutUs from "../components/AboutUs";
import LanguageSwitcher from "../components/LanguageSwitcher";



function Home(){
    return(
        <div className="home">
            <LanguageSwitcher/>
            <ConverterWidget />
            <LocationSection/>
            <AboutUs/>
        </div>
    )
}

export default Home
