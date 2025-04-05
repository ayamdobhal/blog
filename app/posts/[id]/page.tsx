import { getAllPostIds, getPostData, PostData } from "@/lib/markdown";
import Head from "next/head";
import Highlight from "../../components/Highlight";

interface PostProps {
  params: Promise<{
    id: string;
  }>;
}

async function getStaticProps(params: { id: string }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export default async function Post(props0: PostProps) {
  const params = await props0.params;
  const { props } = await getStaticProps(params);
  const postData: PostData = props.postData;

  return (
    <div className="flex flex-col bg-black text-white px-[12vh] py-[8vh] w-screen h-screen">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <small className="text-gray-500">{postData.date}</small>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
      />
      <Highlight />
    </div>
  );
}
