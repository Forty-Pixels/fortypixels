import type {LkrMap} from "./data";
// Imported only by app/pricing-lk/page.tsx, so these figures stay out of the public /pricing bundle.
// Keys must match the package names in ./data — a missing key renders as "Quoted".
export const lkr:LkrMap={
 "Launch Page":30000,"Growth Page":55000,"Luxury Scroll":110000,
 "Brand Website":60000,"Professional":100000,"Corporate":170000,
 "Commerce Lite":50000,"Commerce Growth":120000,"Commerce Advanced":220000,
 "App Starter":150000,"App Professional":300000,"App Marketplace":450000,
 "Essentials":25000,"Growth":55000,"Full Management":95000,
 "Basic":7000,"Pro":20000,"Growth Retainer":30000
};
