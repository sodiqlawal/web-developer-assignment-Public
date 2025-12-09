import Users from '@/components/users/Users';

type Props = {
  searchParams: { page?: string };
};

const Page = async({ searchParams }: Props) => {
  const sp = await searchParams;
  const page = Number(sp.page ?? "1");
  return <Users page={page} />;
};

export default Page;
