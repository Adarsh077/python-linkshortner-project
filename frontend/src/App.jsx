import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import TeamMembers from './components/TeamMembers';

function App() {
  return (
    <div>
      <section className="w-full px-3 antialiased bg-indigo-600 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <Navbar />
          <HeroSection />
        </div>
      </section>
      <TeamMembers />
      <Footer />
    </div>
  );
}

export default App;
