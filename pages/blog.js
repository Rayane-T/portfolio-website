import Head from "next/head";
import BlogPage from "../src/Pages/Blog";

export default function Blog(props) {
  return (
    <>
      <Head>
        <title>Blog | Rayane Tayache</title>
      </Head>
      <BlogPage {...props} />
    </>
  );
}
