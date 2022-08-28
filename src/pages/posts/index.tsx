import { client } from "@/client";
import styles from "@/scss/pages/posts.module.scss";
import Body from "@/sections/Body";
import Header from "@/sections/Header";
import Pagination from "@/ui/Pagination";
import Posts from "@/ui/Posts";
import { getNextStaticProps } from "@faustjs/next";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const POSTS_PER_PAGE = 6;

export default function Page() {
  const { query = {} } = useRouter();
  const { postSlug, postCursor } = query;
  const { usePosts, useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const isBefore = postSlug === "before";
  const posts = usePosts({
    after: !isBefore ? (postCursor as string) : undefined,
    before: isBefore ? (postCursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  });

  if (useQuery().$state.isLoading) {
    return null;
  }

  return (
    <>
      <Header />
      <Head>
        <title>
          {generalSettings?.title} - {generalSettings?.description}
        </title>
      </Head>
      <Body>
        <main className="content content-index">
          <Posts
            posts={posts?.nodes ?? undefined}
            heading="Blog Posts"
            headingLevel="h2"
            postTitleLevel="h3"
            id={styles.post_list}
          />
          <Pagination
            pageInfo={posts?.pageInfo ?? undefined}
            basePath="/posts"
          />
        </main>
      </Body>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
