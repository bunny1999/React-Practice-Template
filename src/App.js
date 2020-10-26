import React from "react"
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import CardSection from "./CardSection";
import Footer from "./Footer";

const App=()=>{
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <FeatureSection/>
            <CardSection/>
            <Footer/>
        </div>
    );
}

export default App;