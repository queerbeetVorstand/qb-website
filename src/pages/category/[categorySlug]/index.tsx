import { client } from "@/client";
import Header from "@/sections/Header";
import Pagination from "@/ui/Pagination";
import Posts from "@/ui/Posts";
import { getNextStaticProps, is404 } from "@faustjs/next";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const POSTS_PER_PAGE = 6;

export default function Page() {
  const { useQuery, usePosts, useCategory } = client;
  const { query = {} } = useRouter();
  const { categorySlug, paginationTerm, categoryCursor } = query;
  const generalSettings = useQuery().generalSettings;
  const category = useCategory();
  const isBefore = paginationTerm === "before";
  const posts = usePosts({
    after: !isBefore ? (categoryCursor as string) : undefined,
    before: isBefore ? (categoryCursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  });

  return (
    <>
      <Header />
      <Head>
        <title>Posts - {generalSettings?.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Category: {category?.name}</h2>
          <Posts posts={posts?.nodes ?? undefined} />

          <Pagination
            pageInfo={posts?.pageInfo ?? undefined}
            basePath={`/category/${categorySlug}`}
          />
        </div>
      </main>
    </>
  );
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
