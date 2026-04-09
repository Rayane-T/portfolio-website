import Head from "next/head";
import TravelPage from "../src/Pages/Travel";

export default function Travel(props) {
  return (
    <>
      <Head>
        <title>Travel | Rayane Tayache</title>
      </Head>
      <TravelPage {...props} />
    </>
  );
}
