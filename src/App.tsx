import { ContactSection } from './components/ContactSection';
import { CourseOfferSection } from './components/CourseOfferSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LocationsSection } from './components/LocationsSection';
import { PricingSection } from './components/PricingSection';
import { ReservationSection } from './components/ReservationSection';

export function App(): JSX.Element {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <CourseOfferSection />
        <LocationsSection />
        <PricingSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}