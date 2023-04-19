import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex bg-slate-800 min-h-screen pb-20">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
