import { Link } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';
import { Navbar } from "../components/Navbar"
import { Footer } from '../components/Footer'
import { HomeMain } from "./Home-main"
import Logo from "../assets/logo.png"
import Banner from "../assets/home-banner.png"
import { AboutUs } from "./AboutUs"
import { Instructors } from "./Instructors"
import { Courses } from "./Courses"
import { ContactUs } from "./ContactUs"

export const Home = () => {
    return(
        <main>
            <Navbar />
            <HomeMain />
            <AboutUs />
            <Instructors />
            <Courses />
            <ContactUs/>
            <Footer />
        </main>
    )
}
