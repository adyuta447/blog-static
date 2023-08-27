import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
          {props.title}
        </h2>
      </Link>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.subtitle}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.date}
      </p>
    </div>
  );
};

export default PostPreview;
