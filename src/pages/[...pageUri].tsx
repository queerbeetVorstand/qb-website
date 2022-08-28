import { client, Page as PageType } from "@/client";
import Header from "@/sections/Header";
import { getNextStaticProps, is404 } from "@faustjs/next";
import { GetStaticPropsContext } from "next";

export interface PageProps {
  page: PageType | null | undefined;
}

export function PageComponent({ page }: PageProps) {
  // const { useQuery } = client;
  // const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header />

      <main className="content content-single">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: page?.content() ?? "" }} />
        </div>
      </main>
    </>
  );
}

export default function Page() {
  const { usePage } = client;
  const page = usePage();

  return <PageComponent page={page} />;
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
