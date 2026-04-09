import Head from "next/head";
import ProjectsPage from "../src/Pages/Projects";

export default function Projects(props) {
  return (
    <>
      <Head>
        <title>Projects | Rayane Tayache</title>
      </Head>
      <ProjectsPage {...props} />
    </>
  );
}
