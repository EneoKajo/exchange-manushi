import ConverterWidget from "../components/ConverterWidget";
import LocationSection from "../components/LocationSection";
import AboutUs from "../components/AboutUs";



function Home(){
    return(
        <div className="home">
            <ConverterWidget />
            <LocationSection/>
            <AboutUs/>
        </div>
    )
}

export default Home
