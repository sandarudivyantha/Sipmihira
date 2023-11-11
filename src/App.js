import './App.css';
import {
  Footer, AboutUs, Downloads, Header,
  LiteratureSurvey, ResearchGap, ResearchProblem, ResearchObjectives, Methodology, Technologies, Milestones
} from './containers';
import {Navbar, ContactUs } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <LiteratureSurvey />
      <ResearchGap />
      <ResearchProblem />
      <ResearchObjectives />
      <Methodology />
      <Technologies />
      <Milestones />
      <Downloads />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App; 
