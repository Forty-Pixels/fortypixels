"use client";
import {useEffect} from "react";
import Script from "next/script";
import {GA_ID,track} from "../lib/analytics";
// Route changes are hard navigations (see SiteFrame's go()), so GA4's automatic page_view
// covers every route — no manual pageview wiring needed.
export function Analytics(){
 useEffect(()=>{if(!GA_ID)return;
  // Calendly posts a message to the parent window when a booking completes.
  const onMessage=(e:MessageEvent)=>{
   if(typeof e.origin!=="string"||!e.origin.endsWith("calendly.com"))return;
   const event=(e.data as{event?:string})?.event;
   if(event==="calendly.event_scheduled")track("generate_lead",{method:"calendly"});
   else if(event==="calendly.profile_page_viewed")track("schedule_view",{method:"calendly"});
  };
  window.addEventListener("message",onMessage);return()=>window.removeEventListener("message",onMessage);
 },[]);
 if(!GA_ID)return null;
 return <>
  <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive"/>
  <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:true});`}</Script>
 </>;
}
