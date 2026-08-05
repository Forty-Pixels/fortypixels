import type {MetadataRoute} from "next";
import {projectData} from "./components/Sections";
import {SITE_URL} from "./lib/schema";
export const dynamic="force-static";
// /pricing-lk is intentionally absent — it is the private LKR list and sets robots:{index:false}.
const staticRoutes:[string,number,MetadataRoute.Sitemap[number]["changeFrequency"]][]=[["",1,"monthly"],["/services",.9,"monthly"],["/portfolio",.9,"monthly"],["/pricing",.8,"monthly"],["/about",.7,"yearly"],["/contact",.7,"yearly"]];
export default function sitemap():MetadataRoute.Sitemap{const lastModified=new Date();return [
 ...staticRoutes.map(([path,priority,changeFrequency])=>({url:`${SITE_URL}${path}`,lastModified,changeFrequency,priority})),
 ...Object.keys(projectData).map(slug=>({url:`${SITE_URL}/portfolio/${slug}`,lastModified,changeFrequency:"yearly" as const,priority:.8}))
]}
