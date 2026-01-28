import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { AstroSharedContext } from "astro";

export async function GET(context: AstroSharedContext) {
  const posts = await getCollection("blog");
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site ?? '',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
