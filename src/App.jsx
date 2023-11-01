import Gallery from "./components/Gallery/Gallery";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-5">
      <div className="max-w-7xl mx-auto border bg-white p-5 rounded-md">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
