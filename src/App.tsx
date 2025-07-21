import "./App.css";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
