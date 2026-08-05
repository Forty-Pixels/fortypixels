import type {Metadata} from "next";
import {PricingClient} from "../pricing/PricingClient";
import {lkr} from "../pricing/data-lk";

// Private LKR price list. Kept out of the sitemap and out of the index deliberately —
// see app/sitemap.ts. Share the URL directly with Sri Lankan clients.
export const metadata:Metadata={
 title:"Pricing (LKR)",
 description:"Forty Pixels package pricing in Sri Lankan rupees.",
 robots:{index:false,follow:false}
};

export default function PricingLkPage(){return <PricingClient currencies={["LKR"]} lkr={lkr}/>}
