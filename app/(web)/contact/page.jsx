
import axios from "axios";
import ClientContact from "./ClientContact"
export async function generateMetadata() {
    
   


  try{
  const SERVER_URL= process.env.NEXT_PUBLIC_SERVER_URL;

let response=await axios.get(`${SERVER_URL}/api/getAllPagemeta`);
   let allMetaData=response.data;
  let metaData=allMetaData.find((item)=>{
  
      if(item.page==="contact"){
          return true;
      }else{
          return false;
      }
      });
if(metaData){
  return {
    title:`${metaData.title}`,
    description:`${metaData.description}`,
    keywords: metaData.metaKeywords,
    authors: [],
    openGraph: {
      title: `${metaData.ogTitle}`,
      description: `${metaData.ogDescription}`,
      url: `${metaData.canonicalUrl}`,
      siteName: `${metaData.ogSiteName}`,
      images: [
        {
          url: `${metaData.ogImageUrl}`,
          width: 800,
          height: 600,
          alt: '',
        },
      ],
      locale: `${metaData.language}`,
      type: `${metaData.ogType}`,
    },
    twitter: {
      card: `${ metaData?.twitterCard && metaData?.twitterCard}`,
      title: `${metaData?.twitterTitle && metaData?.twitterTitle }`,
      site: `${metaData?.twitterSite && metaData?.twitterSite}`,
      creator: `${metaData?.twitterCreator && metaData?.twitterCreator }`,
      description: `${metaData?.twitterDescription && metaData?.twitterDescription }`,
      images: metaData?.twitterImage && [`${metaData?.twitterImage}`],
    },
  }
}
}catch(error){
  console.error("Error fetching metadata:", error);
  return {
    title: 'Error',
    description: 'Failed to fetch metadata.',
  };
}
}
export default function Contact() {
  return (
   <>
  
   <ClientContact/>
   </>
  )
}
