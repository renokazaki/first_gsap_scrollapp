import Page from "./Components/Pages/Page";
import CanvasContainer from "./Components/CanvasComponents/CanvasContaier";

function App() {
  return (
    <>
      <div className="h-screen w-full">
        {/* //Canvasにだけfixedを付けないと、ページが表示されなくなるため別のdivでつけている */}
        <div className="fixed  w-full h-full ">
          <CanvasContainer />
        </div>
        <Page />
      </div>
    </>
  );
}

export default App;
