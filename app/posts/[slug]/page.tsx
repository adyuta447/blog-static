import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <div>
        <div className="my-12">
          <h1 className="text-4xl text-center text-white text-2xl">{post.data.title}</h1>
          <p className="text-slate-500 mt-2 text-center">{post.data.date}</p>
        </div>
        <article className="prose lg:prose-xl prose-blue text-white">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </>
  );
};

export default PostPage;
