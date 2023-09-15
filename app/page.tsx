"use client";
import Career from "@components/sections/career";
import Intro from "@components/sections/intro";
import Projects from "@components/sections/projects";

import { PROJECTS } from "@data/projects";
import { JOBS } from "@data/jobs";
import Tech from "@components/sections/tech";
import { gql, request } from "graphql-request";
import Blogs from "@components/sections/blogs";
import DevSetup from "@components/sections/dev-setup";
import { DEV_SETUP } from "@data/dev-setup";
import Contact from "@components/sections/contact";
import Header from "@components/sections/header";
import Footer from "@components/sections/footer";
import About from "@components/sections/about";

export default async function Home(props: any) {
  const res = await getStaticProps();

  return (
    <div className="pt-5 xl:pt-10">
      <Header />
      <main>
        <Intro />

        <Projects projects={res.props.projects} />

        <Career jobs={res.props.jobs} />

        <About />

        <Tech />

        <Blogs posts={res.props.posts} />

        <DevSetup extensions={DEV_SETUP} />

        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const query = gql`
    query {
      user(username: "sudhagar") {
        publication {
          posts(page: 0) {
            title
            coverImage
            slug
            cuid
            totalReactions
            brief
            dateAdded
          }
        }
      }
    }
  `;
  const data: any = await request("https://api.hashnode.com/", query);
  return {
    props: {
      posts: data.user.publication.posts,
      jobs: JOBS,
      projects: PROJECTS,
    },
  };
}
