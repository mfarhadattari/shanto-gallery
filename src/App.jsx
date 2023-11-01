import Gallery from "./components/Gallery/Gallery";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-5 font-playpen-sans">
      <div className="max-w-7xl mx-auto border bg-white rounded-md">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
