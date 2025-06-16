import Hero from "./hero_section"
import GalleryPage from "./gallery"
import CustomerReviews from "./customer_reviews";
import Footer from "../reusables/footer";
export default function Parent(){
    return(
        <>
        <Hero/>
        <GalleryPage/>
        <CustomerReviews/>
        <Footer/>
        </>
    );
}