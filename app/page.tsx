import { getSortedPostsData, PostData } from "@/lib/markdown";
import Link from "next/link";

async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default async function Home() {
  const { props } = await getStaticProps();
  const allPostsData: PostData[] = props.allPostsData;

  return (
    <div className="flex flex-col bg-black text-white px-[12vh] py-[8vh] w-screen h-screen">
      <h1 className="text-7xl font-bold mb-4">Ayam&apos;s Blog</h1>
      <p className="text-xl"></p>
      <div className="flex flex-col justify-center flex-1">
        {allPostsData.length === 0 ? (
          <p className="text-7xl">
            Nothing to see here yet. But there will be something soon...
          </p>
        ) : (
          <table className="table-auto border-solid">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">/ DATE</th>
                <th className="text-left px-4 py-2">/ TITLE</th>
              </tr>
            </thead>
            <tbody>
              {allPostsData.map(({ id, date, title }) => (
                <tr
                  key={id}
                  className="hover:bg-pink-400 hover:text-white border-t border-white cursor-pointer"
                >
                  <td className="px-4 py-2">
                    <Link href={`/posts/${id}`} className="block">
                      {date}
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <Link href={`/posts/${id}`} className="block">
                      {title}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
