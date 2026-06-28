import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import PopularSkills from "../../components/PopularSkills/PopularSkills";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import WhySkillSwap from "../../components/WhySkillSwap/WhySkillSwap";
import Testimonials from "../../components/Testiminials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Newsletter from "@/components/Newsletter/Newsletter";


function Home(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793]">
            <Navbar/>
            <Hero/>
            <HowItWorks/>
            <PopularSkills/>
            <WhySkillSwap/>
            <Testimonials/>
            <FAQ/>
            <CTA/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}
export default Home;