import MainContents from "./Page/MainContents";
import Introduction from "./Page/Introduction";
import SubContents from "./Page/SubContents";
import TopContents from "./Page/TopContents";

const Page = () => {
  return (
    <>
      <div className=" w-full h-full ">
        <section className="page1 w-full h-screen">
          <TopContents />
        </section>
        <section className="page2 w-full h-screen">
          <Introduction />
        </section>
        <section className="page3 w-full h-screen">
          <MainContents />
        </section>
        <section className="page4 w-full h-screen">
          <SubContents />
        </section>
      </div>
    </>
  );
};

export default Page;
