import { User } from '@/types/user';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getPagination = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const first = 1;
  const last = totalPages;

  // 1) Small lists: no ellipsis
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // 2) ONE ELLIPSIS CASES (6 numbers + 1 ellipsis)

  // Near the start: 1 2 3 4 5 … last
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, '…', last];
  }

  // Near the end: 1 … last-4 last-3 last-2 last-1 last
  if (currentPage >= totalPages - 3) {
    return [first, '…', last - 4, last - 3, last - 2, last - 1, last];
  }

  // 3) TWO ELLIPSES (MIDDLE): 5 middle numbers + 2 ellipses = 7 numbers total
  // 1 … p-2 p-1 p p+1 p+2 … last
  const middleStart = currentPage - 2;
  const middleEnd = currentPage + 2;

  return [
    first,
    '…',
    middleStart,
    middleStart + 1,
    currentPage,
    middleEnd - 1,
    middleEnd,
    '…',
    last,
  ];
};

export const formatUserAddress = (user: User) => {
  if (!user) return '';
  return `${user.street}, ${user.state}, ${user.city}, ${user.zipcode}`;
};
