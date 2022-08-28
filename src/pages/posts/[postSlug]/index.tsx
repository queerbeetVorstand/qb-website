import { client, Post } from "@/client";
import Body from "@/sections/Body";
import Header from "@/sections/Header";
import { getNextStaticProps, is404 } from "@faustjs/next";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

type PostPreviewNode = Post["preview"]["node"];

export interface PostProps {
  post: Post | PostPreviewNode | null | undefined;
}

export function PostComponent({ post }: PostProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header />
      <Head>
        <title>
          {post?.title()} - {generalSettings?.title}
        </title>
      </Head>
      <Body>
        <main className="content content-single">
          <div className="wrap">
            <div dangerouslySetInnerHTML={{ __html: post?.content() ?? "" }} />
          </div>
        </main>
      </Body>
    </>
  );
}

export default function Page() {
  const { usePost } = client;
  const post = usePost();

  return <PostComponent post={post} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}