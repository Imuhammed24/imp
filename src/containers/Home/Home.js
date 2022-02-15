import React, {useState} from "react";
import SideBar from "../../components/UI/SideBar/SideBar";
import Layout from "../../hoc/Layout/Layout";
import LandingIntro from "../../components/Sections/LandingIntro/LandingIntro";
import TechStack from "../../components/Sections/TechStack/TechStack";

const Home = props => {
    const [showSideBar, setShowSideBar] = useState(false);

    const toggleDrawer = () => {
        console.log('clicked')
        setShowSideBar(prevState => !prevState)
    };

    return (
        <Layout toggleDrawer={toggleDrawer}>
            <SideBar toggleDrawer={toggleDrawer} showSideBar={showSideBar}/>
            <LandingIntro />
            <TechStack />
        </Layout>
    )
}

export default Home;