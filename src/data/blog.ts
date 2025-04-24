import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
}

// export async function getBlogPosts() {
//   return getAllPosts(path.join(process.cwd(), "content"));
// }
export async function getBlogPosts() {
  const localPosts = await getAllPosts(path.join(process.cwd(), "content"));

  const mediumPost = {
    metadata: {
      title: "12 Roles You Can Play in a Group Discussion and How to Use Them Right",
      publishedAt: "2025-04-07",
      summary: "Understand the 12 key roles in a group discussion to stand out and succeed.",
      image: "", // optional image URL
      external: "https://medium.com/@boranarohith07/12-roles-you-can-play-in-a-group-discussion-and-how-to-use-them-right-eb1de465e5b8",
    },
    slug: "medium-post",
    source: "", // not used
  };

  return [mediumPost, ...localPosts];
}
