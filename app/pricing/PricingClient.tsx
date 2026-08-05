"use client";

import {useState} from "react";
import {Arrow,TransitionLink,Words} from "../components/Sections";
import {type Currency,type LkrMap,type Package,symbols,groups,social,ongoing,faq} from "./data";

function Price({item,currency,lkr}:{item:Package;currency:Currency;lkr?:LkrMap}){
 const amount=item.price?(currency==="LKR"?lkr?.[item.name]:item.price[currency]):undefined;
 if(amount===undefined)return <span className="pricing-quote">Quoted</span>;
 return <span className="pricing-price" key={currency}>{symbols[currency]}{amount.toLocaleString("en-US")}{item.monthly&&<small>/mo</small>}</span>
}

function PackageRows({items,currency,lkr}:{items:Package[];currency:Currency;lkr?:LkrMap}){
 return <div className="pricing-rows">{items.map((item,index)=><article className={`pricing-row ${item.price?"":"is-custom"}`} key={item.name} data-reveal>
  <span className="pricing-row-index">{String(index+1).padStart(2,"0")}</span>
  <h3>{item.name}</h3>
  <div className="pricing-row-copy"><p>{item.description}</p>{item.timeline&&<span>{item.timeline}</span>}</div>
  <Price item={item} currency={currency} lkr={lkr}/>
 </article>)}</div>
}

// currencies drives which prices this page shows: /pricing is USD+EUR, /pricing-lk passes ["LKR"] plus the lkr map.
export function PricingClient({currencies=["USD","EUR"],lkr}:{currencies?:Currency[];lkr?:LkrMap}){
 const [currency,setCurrency]=useState<Currency>(currencies[0]);
 const choose=(next:Currency)=>setCurrency(next);
 const multi=currencies.length>1;
 return <main className="pricing-page">
  <section className="pricing-hero" id="top" data-nav-theme="light">
   <div className="pricing-hero-top"><span>{"// PRICING"}</span><span>FIXED SCOPE · CLEAR DELIVERY</span></div>
   <h1><Words>Fixed prices. Everything spelled out.</Words></h1>
   <p data-reveal>Every build is handled start to finish, with the scope written down before we begin.{multi?" Prices show in your currency — switch below.":` All prices in ${currencies[0]}.`}</p>
  </section>

  <section className="pricing-currency" data-nav-theme="dark" aria-label={multi?"Choose pricing currency":"Pricing currency"}>
   <div>
    <span className="pricing-currency-label">{multi?"Show prices in":`Prices in ${currencies[0]}`}</span>
    {multi&&<div className="currency-toggle" role="group" aria-label="Currency">
     {currencies.map(code=><button key={code} type="button" className={currency===code?"is-active":""} aria-pressed={currency===code} onClick={()=>choose(code)}>{code}</button>)}
    </div>}
   </div>
  </section>

  <div className="pricing-catalog">
   {groups.map((group,index)=><section className="pricing-group" key={group.title} data-nav-theme="light">
    <header><span>0{index+1}</span><h2>{group.title}</h2>{group.note&&<p>{group.note}</p>}</header>
    <PackageRows items={group.packages} currency={currency} lkr={lkr}/>
   </section>)}
  </div>

  <section className="pricing-custom" data-nav-theme="dark">
   <span>{"// SCALABLE BUILD"}</span>
   <h2><Words>Bigger than a package?</Words></h2>
   <p data-reveal>Delivery apps, booking systems, platforms, automation — priced by features, integrations, and complexity. Planned per project.</p>
   <TransitionLink href="/contact" className="pricing-inline-link">Plan a custom build <Arrow/></TransitionLink>
  </section>

  <section className="pricing-service pricing-social" data-nav-theme="lime">
   <header><span>{"// ADD-ON: SOCIAL"}</span><h2><Words>We built it. We can run it too.</Words></h2><p>A great site is half the story — people still have to find you. Once you&apos;re live, we keep the brand active: posts, graphics, the whole thing managed.</p></header>
   <PackageRows items={social} currency={currency} lkr={lkr}/>
  </section>

  <section className="pricing-service pricing-ongoing" data-nav-theme="light">
   <header><span>{"// ONGOING"}</span><h2><Words>Live is the start, not the finish.</Words></h2></header>
   <PackageRows items={ongoing} currency={currency} lkr={lkr}/>
  </section>

  <section className="pricing-faq" data-nav-theme="dark">
   <div className="pricing-faq-title"><span>{"// FAQ"}</span><h2><Words>Before you ask.</Words></h2></div>
   <div className="pricing-faq-list">{faq.map(([question,answer],index)=><article key={question} data-reveal><span>0{index+1}</span><h3>{question}</h3><p>{answer}</p></article>)}</div>
  </section>

  <section className="pricing-closing" data-nav-theme="lime">
   <span>{"// NO PRESSURE. JUST CLARITY."}</span>
   <h2><Words>Still deciding? Let&apos;s talk it through.</Words></h2>
   <TransitionLink href="/contact" className="pricing-book">Book a free call <Arrow/></TransitionLink>
  </section>
 </main>
}
