export type Params = {
  slug: string;
};

export type SearchParams = Record<string, string | string[] | undefined>;

export type Props = {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
};
