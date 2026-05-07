import { StickyHeader } from './components/StickyHeader';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ContractorProfile } from './components/ContractorProfile';
import { ContractsTable } from './components/ContractsTable';
import { DistrictsMap } from './components/DistrictsMap';
import { MarketImpact } from './components/MarketImpact';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />
      <Hero />
      <div id="o-projektu">
        <AboutSection />
      </div>
      <ContractorProfile />
      <ContractsTable />
      <DistrictsMap />
      <MarketImpact />
      <CallToAction />
      <Footer />
    </div>
  );
}