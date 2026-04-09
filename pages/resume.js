import Head from "next/head";
import ResumePage from "../src/Pages/Resume";

export default function Resume(props) {
  return (
    <>
      <Head>
        <title>Resume | Rayane Tayache</title>
      </Head>
      <ResumePage {...props} />
    </>
  );
}
