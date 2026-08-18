import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { ADDRESS, businessesCore } from "@/data/business-core";
import { getTodayHours, isOpenNow, toSchemaOpeningHours } from "@/lib/hours";

export default defineTool({
  name: "get_business",
  title: "Get business details",
  description:
    "Get full details for one business by slug: datta-services, sara-bangdi-bhandar, datta-and-sons-shoe-shop or sara-tailoring-shop.",
  inputSchema: { slug: z.string().describe("Business slug.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };

    const b = businessesCore.find((x) => x.slug === slug);
    if (!b)
      throw new ToolError(
        `Unknown business "${slug}". Known slugs: ${businessesCore.map((x) => x.slug).join(", ")}`,
      );

    const payload = {
      slug: b.slug,
      name: b.name,
      tagline: b.tagline,
      description: b.description,
      owner: b.owner,
      phone: b.phone,
      services: b.items,
      address: ADDRESS,
      openingHours: toSchemaOpeningHours(b.hours),
      todayHours: getTodayHours(b.hours),
      openNow: isOpenNow(b.hours),
    };

    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
