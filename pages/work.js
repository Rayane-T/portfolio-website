import Head from "next/head";
import WorkPage from "../src/Pages/Work";

export default function Work(props) {
  return (
    <>
      <Head>
        <title>Work | Rayane Tayache</title>
      </Head>
      <WorkPage {...props} />
    </>
  );
}
