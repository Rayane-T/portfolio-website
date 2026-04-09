import Head from "next/head";
import LeadershipPage from "../src/Pages/Leadership";

export default function Leadership(props) {
  return (
    <>
      <Head>
        <title>Leadership | Rayane Tayache</title>
      </Head>
      <LeadershipPage {...props} />
    </>
  );
}
