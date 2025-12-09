'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Pagination from '../ui/Pagination';
import { User } from '@/types/user';
import Table from '../ui/Table';
import { fetchUsersAPI } from '@/services/users/query';
import { EQueryKey } from '@/constants/query-keys';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPostsAPI } from '@/services/posts/query';

const tableHead: { name: keyof User; displayName: string }[] = [
  { name: 'name', displayName: 'Full name' },
  { name: 'email', displayName: 'Email address' },
  { name: 'address', displayName: 'Address' },
];
interface UsersTableProps {
  usersCount: number;
  DEFAULT_PAGE_LIMIT: number;
  page: number
}

export function UsersTable({
  usersCount,
  DEFAULT_PAGE_LIMIT,
  page
}: UsersTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const { data: usersData, isLoading } = useQuery({
    queryKey: [EQueryKey.users, page],
    queryFn: () =>
      fetchUsersAPI({ pageNumber: page - 1, pageSize: DEFAULT_PAGE_LIMIT }),
    placeholderData: keepPreviousData,
  });

  const handlePageChange = useCallback(
    (newPage: number) => {
      const q = `page=${newPage}`;
      router.push(`${pathname}?${q}`, { scroll: false });
    },
    [router, pathname]
  );

  const getRowHref = useCallback(
    (i: number) => {
      const userId = usersData?.[i].id || '';
      if (userId) {
        // Prefetch posts so they're ready when user clicks
        queryClient.prefetchQuery({
          queryKey: [EQueryKey.posts, userId],
          queryFn: () => fetchPostsAPI({ userId }),
        });
      }
      return `/users/${usersData?.[i].id}/posts?page=${page}`;
    },
    [usersData, page]
  );

  return (
    <div className='space-y-10'>
      <Table<User>
        fields={tableHead}
        isLoading={isLoading}
        getRowHref={getRowHref}
        tableData={usersData || []}
        builder={(field, data) => {
          switch (field.name) {
            case 'address':
              return (
                <p className='max-w-[392px] truncate'>
                  {data.address}
                </p>
              );
            default:
              return data[field.name];
          }
        }}
      />
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(usersCount / DEFAULT_PAGE_LIMIT)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
