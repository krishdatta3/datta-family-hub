import { defineTool } from "@lovable.dev/mcp-js";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "get_visitor_count",
  title: "Get visitor count",
  description: "Read the total number of visits recorded for the website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async (_input, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };

    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("site_stats")
      .select("visits")
      .eq("id", "main")
      .maybeSingle();

    if (error) return { content: [{ type: "text", text: error.message }], isError: true };

    const visits = Number(data?.visits ?? 0);
    return {
      content: [{ type: "text", text: `Total site visits: ${visits}` }],
      structuredContent: { visits },
    };
  },
});
