import Head from "next/head";
import BucketListPage from "../src/Pages/BucketList";

export default function BucketList(props) {
  return (
    <>
      <Head>
        <title>List 100 | Rayane Tayache</title>
      </Head>
      <BucketListPage {...props} />
    </>
  );
}
