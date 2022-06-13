import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Hi, nice to have you here"
          subTitle="Welcome to my Portfolio Website. I am Patrick Lemmer, a Full-Stack Web Developer from the beautiful state of Brandenburg in East Germany."
        />
        <BasicTextModule
          title="I am a career changer."
          content="Short note about the fact that I am changing careers into Full-Stack Web Development."
          link="/products"
          linkText="Read the full Story"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Portfolio."
          introduction="This is an overview of the results of my Web Development journey."
        />
        <LatestPosts
          title="Blog"
          introduction="Every so often, I pick up pen and paper (*gasp*) keyboard and notes app and write about things I come across as Web Developer. I started writing during my time in the career change program."
        />
      </Layout>
    </>
  )
}

export default Index
