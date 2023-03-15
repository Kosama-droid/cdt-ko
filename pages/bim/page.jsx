import Link from "next/link";

const BimPage = () => {
  return (
    <>
      <h1>BIM Viewer</h1>
      <h2>IFC.js</h2>
      <Link
        href="/"
        className="rounded-md bg-primary py-3 px-8 text-base font-bold text-white shadow-signUp duration-300 hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
      >
        Back to Homepage
      </Link>
    </>
  );
};

export default BimPage;