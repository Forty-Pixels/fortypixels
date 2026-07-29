import {projectData,type ProjectKey} from "../components/Sections";

export const SITE_URL="https://fortypixels.com";
export const ORG_ID=`${SITE_URL}/#organization`;

// Every entry must be confirmed as this Forty Pixels (Colombo) — several unrelated agencies use
// near-identical names (Forty Eight Pixels, 44 Pixels, Fifty Pixels, FORTYPIXEL Kiel), so a wrong
// entry makes the entity ambiguity worse rather than better.
// Note: facebook.com/FortyPixels is a DIFFERENT page and must never be listed here.
// TODO: LinkedIn company page. TODO: once a Facebook vanity username is set (ideally
// /fortypixelshq to match Instagram), replace the profile.php URL with it.
export const SAME_AS:string[]=["https://www.instagram.com/fortypixelshq/","https://www.facebook.com/profile.php?id=61587309161349"];

const organization={"@type":"Organization","@id":ORG_ID,name:"Forty Pixels",url:SITE_URL,logo:`${SITE_URL}/og.png`,image:`${SITE_URL}/og.png`,email:"hello@fortypixels.com",description:"Forty Pixels combines strategy, design and engineering to build distinctive websites and digital products.",address:{"@type":"PostalAddress",addressLocality:"Colombo",addressCountry:"LK"},...(SAME_AS.length?{sameAs:SAME_AS}:{})};

const services:[string,string][]=[["Landing Pages","One focused page that turns a visitor into a customer, for launches, campaigns and single offers."],["Stores","Commerce experiences that are easy to buy from and straightforward to run, from a small collection to a serious catalog."],["Systems","Custom websites, platforms, apps, portals and internal tools built around how a business actually works."]];

export function homeSchema(){return{"@context":"https://schema.org","@graph":[
 organization,
 {"@type":"WebSite","@id":`${SITE_URL}/#website`,url:SITE_URL,name:"Forty Pixels",publisher:{"@id":ORG_ID},inLanguage:"en"},
 {"@type":"ProfessionalService","@id":`${SITE_URL}/#service`,name:"Forty Pixels",url:SITE_URL,parentOrganization:{"@id":ORG_ID},areaServed:[{"@type":"Country",name:"Sri Lanka"},{"@type":"Place",name:"Worldwide (remote)"}],address:{"@type":"PostalAddress",addressLocality:"Colombo",addressCountry:"LK"},hasOfferCatalog:{"@type":"OfferCatalog",name:"Services",itemListElement:services.map(([name,description])=>({"@type":"Offer",itemOffered:{"@type":"Service",name,description,provider:{"@id":ORG_ID}}}))}}
]}}

export function caseStudySchema(slug:ProjectKey){const p=projectData[slug];const url=`${SITE_URL}/portfolio/${slug}`;return{"@context":"https://schema.org","@graph":[
 {"@type":"CreativeWork","@id":`${url}/#work`,name:`${p.name} — ${p.tag}`,headline:`${p.name} case study`,description:p.summary,url,creator:{"@id":ORG_ID},about:{"@type":"Organization",name:p.name,url:`https://${p.url}`},image:p.shots.map(s=>`${SITE_URL}${s}`),inLanguage:"en"},
 {"@type":"BreadcrumbList",itemListElement:[["Home",SITE_URL],["Portfolio",`${SITE_URL}/portfolio`],[p.name,url]].map(([name,item],i)=>({"@type":"ListItem",position:i+1,name,item}))}
]}}

export function JsonLd({data}:{data:object}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
