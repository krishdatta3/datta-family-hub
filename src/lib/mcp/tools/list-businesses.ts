import { defineTool } from "@lovable.dev/mcp-js";
import { ADDRESS, businessesCore } from "@/data/business-core";
import { getTodayHours, isOpenNow, toSchemaOpeningHours } from "@/lib/hours";

export default defineTool({
  name: "list_businesses",
  title: "List businesses",
  description:
    "List all four Datta family businesses in Jarawandi with proprietor, phone, services, opening hours and live open/closed status.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };

    const rows = businessesCore.map((b) => ({
      slug: b.slug,
      name: b.name,
      tagline: b.tagline,
      owner: b.owner,
      phone: b.phone,
      services: b.items,
      openingHours: toSchemaOpeningHours(b.hours),
      todayHours: getTodayHours(b.hours),
      openNow: isOpenNow(b.hours),
    }));

    return {
      content: [{ type: "text", text: JSON.stringify({ address: ADDRESS, businesses: rows }, null, 2) }],
      structuredContent: { address: ADDRESS, businesses: rows },
    };
  },
});
