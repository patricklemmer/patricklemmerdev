import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/forest.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Web Developer"
          content="Simplicity, functionality and appealing designs. That's what I`m after"
        >
          <StaticImage
            src="../../../static/logos/dev.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="Wildlife Photographer"
          content="As wildlife photographer I strive to capture the raw beauty of our natural world"
        >
          <StaticImage
            src="../../../static/logos/com.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
