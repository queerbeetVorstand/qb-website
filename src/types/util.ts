import { GetStaticPropsResult } from "next";

export type Maybe<T> = T | null | undefined;

export type StaticApiFetch<T> = Promise<GetStaticPropsResult<Maybe<T>>>;