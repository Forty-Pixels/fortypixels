export const GA_ID=process.env.NEXT_PUBLIC_GA_ID||"";
declare global{interface Window{gtag?:(...args:unknown[])=>void;dataLayer?:unknown[]}}
// No-ops when NEXT_PUBLIC_GA_ID is unset, so local/preview builds never send data.
export function track(name:string,params:Record<string,string|number>={}){if(typeof window!=="undefined")window.gtag?.("event",name,params)}
