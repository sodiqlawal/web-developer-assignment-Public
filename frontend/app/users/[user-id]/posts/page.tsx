import Posts from '@/components/posts/Posts';

type Props = {
  params: { 'user-id': string };
  searchParams: { page?: string };
};

const Page = async ({ params, searchParams }: Props) => {
  const userId = (await params)?.['user-id'];
  const page = Number((await searchParams)?.page || '1');

  return (
    <Posts
      page={page}
      userId={userId}
    />
  );
};

export default Page;
