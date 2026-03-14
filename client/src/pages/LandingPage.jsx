import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyHackBits from '../components/WhyHackBits';
import EventFlow from '../components/EventFlow';
import RulesGuidelines from '../components/RulesGuidelines';
import TeamPage from '../components/TeamPage';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-space-dark">
      <Navbar />
      <main>
        <Hero />
        <WhyHackBits />
        <RulesGuidelines />
        <EventFlow />
        <TeamPage />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;