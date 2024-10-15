import HeaderSection from './HeaderSection';
import InfoSection from './InfoSection';
// import GallerySection from './GallerySection';
import SignupSection from './SignupSection';
import Footer from './Footer';


const Landing = () => {
    return (
      <div >
     <HeaderSection />
      <InfoSection />
      {/* <GallerySection /> */}
      <SignupSection />
      <Footer />
      </div>
    );
  };
  
  export default Landing;