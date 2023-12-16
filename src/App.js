import './App.css';
import {DashboardProvider} from "./components/DashboardContext.js"
import DashboardComp from './components/DashboardComp.js';
import NavbarComp from './components/NavbarComp.js';
function App() {
  return (
    <>
    <div className="app-container">
      <DashboardProvider>
      <NavbarComp/>
      <DashboardComp/>
      </DashboardProvider>
    </div>
    </>
  );
}

export default App;
