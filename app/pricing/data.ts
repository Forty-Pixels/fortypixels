// Public package data. LKR figures live in ./data-lk so they never reach the /pricing bundle.
export type Currency="USD"|"EUR"|"LKR";
export type Price={USD:number;EUR:number};
export type Package={name:string;price:Price|null;description:string;timeline?:string;monthly?:boolean};
export type LkrMap=Record<string,number>;

export const symbols:Record<Currency,string>={USD:"$",EUR:"€",LKR:"LKR "};

export const groups:{title:string;note?:string;packages:Package[]}[]=[
 {title:"Landing pages",packages:[
  {name:"Launch Page",price:{USD:199,EUR:189},description:"A clean single page that gets people to act.",timeline:"~1 week"},
  {name:"Growth Page",price:{USD:349,EUR:329},description:"A bigger page you can edit yourself, with light motion.",timeline:"~1–2 weeks"},
  {name:"Luxury Scroll",price:{USD:699,EUR:649},description:"A cinematic, scrolling experience built for impact.",timeline:"~2–3 weeks"},
  {name:"Custom",price:null,description:"Quoted after a short chat."}
 ]},
 {title:"Websites",packages:[
  {name:"Brand Website",price:{USD:399,EUR:369},description:"A professional site, up to 5 pages.",timeline:"~2 weeks"},
  {name:"Professional",price:{USD:649,EUR:599},description:"6–10 pages, a blog, and content you can edit.",timeline:"~3–4 weeks"},
  {name:"Corporate",price:{USD:1099,EUR:999},description:"A large, multi-language site built to scale.",timeline:"~6–8 weeks"},
  {name:"Custom Platform",price:null,description:"Quoted after a discovery call."}
 ]},
 {title:"Online stores",note:"Yours to own and run.",packages:[
  {name:"Commerce Lite",price:{USD:329,EUR:299},description:"Up to 100 products, ready to sell.",timeline:"~2–3 weeks"},
  {name:"Commerce Growth",price:{USD:749,EUR:699},description:"Up to 300 products, filters, coupons, and order management.",timeline:"~4–5 weeks"},
  {name:"Commerce Advanced",price:{USD:1399,EUR:1299},description:"Unlimited products, search, inventory, and a sales dashboard.",timeline:"~6–8 weeks"},
  {name:"Custom Store",price:null,description:"Quoted to scope."}
 ]},
 {title:"Mobile apps",note:"iOS + Android.",packages:[
  {name:"App Starter",price:{USD:999,EUR:899},description:"A solid first app with login and core features.",timeline:"~4–6 weeks"},
  {name:"App Professional",price:{USD:1899,EUR:1749},description:"Payments, notifications, and an admin dashboard.",timeline:"~8–10 weeks"},
  {name:"App Marketplace",price:{USD:2799,EUR:2599},description:"A full multi-seller app with booking and analytics.",timeline:"~10–14 weeks"},
  {name:"Custom App",price:null,description:"Quoted by scope."}
 ]}
];

export const social:Package[]=[
 {name:"Essentials",price:{USD:159,EUR:149},monthly:true,description:"12 posts a month, 2 platforms, a content plan, captions, and a simple report."},
 {name:"Growth",price:{USD:349,EUR:329},monthly:true,description:"20 posts, 3 platforms, scheduling handled, 2 short videos, and a monthly review."},
 {name:"Full Management",price:{USD:599,EUR:549},monthly:true,description:"30+ posts, 4 platforms, videos, audience replies, ad creatives, and a monthly strategy call."}
];

export const ongoing:Package[]=[
 {name:"Basic",price:{USD:49,EUR:45},monthly:true,description:"Bug fixes, small updates, security, and uptime checks."},
 {name:"Pro",price:{USD:129,EUR:119},monthly:true,description:"Everything in Basic, plus performance monitoring, content help, and priority support."},
 {name:"Growth Retainer",price:{USD:199,EUR:189},monthly:true,description:"Ongoing improvements, UX tweaks, better conversions, and regular strategy."}
];

export const faq=[
 ["What's in the price?","Everything in the package scope, designed and built by us, start to finish. No hidden fees."],
 ["How do payments work?","A deposit to begin, the balance on launch. We lay it all out on the call."],
 ["Do I own it?","Yes — design, code, and your content account. No lock-in."],
 ["How many revisions?","Each package includes revision rounds within scope, agreed before we start."],
 ["Can I edit it myself?","On Growth tiers and up, yes. We'll show you how."],
 ["How fast?","Most projects launch within the window shown. Bigger builds are planned per project."]
];
