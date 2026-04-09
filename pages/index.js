import Head from "next/head";
import HomePage from "../src/Pages/Home";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home | Rayane Tayache</title>
      </Head>
      <HomePage {...props} />
    </>
  );
}
