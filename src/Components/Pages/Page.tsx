import MainContents from "./Page/MainContents";
import Introduction from "./Page/Introduction";
import SubContents from "./Page/SubContents";
import TopContents from "./Page/TopContents";

const Page = () => {
  return (
    <>
      <div className=" w-full h-full">
        <section className="page1 w-full h-screen  bg-red-200">
          <TopContents />
        </section>
        <section className="page2 w-full h-screen  bg-red-200">
          <Introduction />
        </section>
        <section className="page3 w-full h-screen  bg-red-200">
          <MainContents />
        </section>
        <section className="page4 w-full h-screen  bg-red-200">
          <SubContents />
        </section>
      </div>
    </>
  );
};

export default Page;
