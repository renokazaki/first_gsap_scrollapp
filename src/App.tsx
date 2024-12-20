import Page from "./Components/Pages/Page";
import CanvasContainer from "./Components/CanvasComponents/CanvasContaier";

function App() {
  return (
    <>
      <div className=" h-full w-full bg-blue-300">
        {/* //Canvasにだけfixedを付けないと、ページが表示されなくなるため別のdivでつけている */}
        <div className="fixed  w-full h-screen ">
          <CanvasContainer />
        </div>
        <Page />
      </div>
    </>
  );
}

export default App;
