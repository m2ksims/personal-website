import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, link }) => {
  return (
    <div className="w-2/3 sm:w-1/2 md:w-1/2 lg:w-2/3 p-4 border border-[#3b3b3b] rounded-lg transition bg-neutral-900">
        <Link href={link}>
            <h1 className="text-lg font-semibold mb-1 underline">{title}</h1>
        </Link>
        <p>{description}</p>
    </div>
  );
};

export default BlogCard;
