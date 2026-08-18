import { defineTool } from "@lovable.dev/mcp-js";
import { faqs, testimonials } from "@/data/business-core";

export default defineTool({
  name: "get_faqs",
  title: "Get FAQs and testimonials",
  description: "Return the site's frequently asked questions and customer testimonials (Marathi).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    const payload = { faqs, testimonials };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
