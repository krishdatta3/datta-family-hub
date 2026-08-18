import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listBusinesses from "./tools/list-businesses";
import getBusiness from "./tools/get-business";
import getFaqs from "./tools/get-faqs";
import getVisitorCount from "./tools/get-visitor-count";

const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "dattas-digital-hub",
  title: "Dattas' Digital Hub",
  version: "0.1.0",
  instructions:
    "Tools for the Datta family business hub in Jarawandi, Etapalli, Gadchiroli. Use `list_businesses` for an overview of all four shops with live open/closed status, `get_business` for one shop's full details, `get_faqs` for FAQs and testimonials, and `get_visitor_count` for the website visit total.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listBusinesses, getBusiness, getFaqs, getVisitorCount] as unknown as Parameters<typeof defineMcp>[0]["tools"],
});
