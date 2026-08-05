import type {Metadata} from "next";
import {PricingClient} from "./PricingClient";

export const metadata:Metadata={
 title:"Pricing",
 description:"Fixed website, commerce, app and ongoing support packages from Forty Pixels.",
 alternates:{canonical:"/pricing"}
};

export default function PricingPage(){return <PricingClient currencies={["USD","EUR"]}/>}
