// import React from "react"
// import Seo from "../components/SEO"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import styled from "styled-components"
// import BannerModule from "../components/BannerModule/BannerModule"
// import Faq from "../components/Faq/Faq"
// import Features from "../components/Features/Features"
// import RichText from "../components/RichText"

// const PortfolioTemplateStyles = styled.div`
//   .container {
//     display: flex;
//     flex-wrap: wrap;
//     .column {
//       flex: 0 0 100%;

//       @media (min-width: 768px) {
//         flex-basis: 50%;

//         &:nth-child(1) {
//           padding-right: 20px;
//         }

//         &:nth-child(2) {
//           padding-left: 20px;
//         }

//         > * {
//           &:last-child {
//             margin-bottom: 0;
//           }
//         }
//       }

//       > * {
//         &:first-child {
//           margin-top: 0;
//         }
//       }
//     }
//   }
// `

// const PortfolioGallery = styled.section`
//   width: 100%;

//   > .container {
//     display: flex;
//     flex-wrap: wrap;
//     gap: calc(var(--gap) / 2);

//     @media (min-width: 1024px) {
//       gap: var(--gap);
//     }

//     > * {
//       width: calc(50% - 10px);

//       @media (min-width: 768px) {
//         width: calc(33.333% - 14px);
//       }

//       @media (min-width: 1024px) {
//         width: calc(25% - 30px);
//       }
//     }
//   }
// `

// const PortfolioTemplate = (contentfulPortfolio) => {
//   const {
//     headerImage,
//     title,
//     price,
//     introduction,
//     description,
//     faqs,
//     gallery,
//   } = contentfulPortfolio
//   const productHeaderImage = getImage(headerImage)
//   return (
//     <>
//       <Seo title={title} />
//       <BannerModule
//         title={title}
//         price={price}
//         subTitle={introduction}
//         enquire={true}
//       >
//         <GatsbyImage
//           className="banner__image"
//           image={productHeaderImage}
//           alt={title}
//         />
//       </BannerModule>
//       <PortfolioTemplateStyles className="section">
//         <div className="container container__tight">
//           {description && (
//             <div className="column">
//               <RichText richText={description} />
//             </div>
//           )}
//           {faqs && (
//             <div className="column">
//               {faqs.map((item, index) => {
//                 return (
//                   <Faq
//                     key={index}
//                     title={item.question}
//                     description={item.answer}
//                   />
//                 )
//               })}
//             </div>
//           )}
//         </div>
//       </PortfolioTemplateStyles>
//       {gallery && (
//         <PortfolioGallery className="section">
//           <div className="container container__tight">
//             {gallery.map((item, index) => {
//               let galleyImage = getImage(item)
//               return <GatsbyImage key={index} image={galleyImage} />
//             })}
//           </div>
//         </PortfolioGallery>
//       )}
//       <Features
//         title="Have a look at my projects."
//         introduction="Here you can find an overview of all my Web Development projects."
//       />
//     </>
//   )
// }

// export default PortfolioTemplate
