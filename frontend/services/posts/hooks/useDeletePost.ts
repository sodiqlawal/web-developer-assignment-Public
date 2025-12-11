import { EQueryKey } from '@/constants/query-keys';
import { Controller } from '@/hooks/useController';
import { deletePostAPI } from '@/services/posts/mutation';
import { Post } from '@/types/post';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export function useDeletePost(userId: string, controller?: Controller) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePostAPI,
    onMutate: async (postId: string) => {
      await queryClient.cancelQueries({ queryKey: [EQueryKey.posts, userId] });

      const previousPosts =
        queryClient.getQueryData<Post[]>([EQueryKey.posts, userId]) ?? [];

      queryClient.setQueryData<Post[]>([EQueryKey.posts, userId], (old = []) =>
        old.filter((post) => post.id !== postId)
      );

      controller?.close();
      return { previousPosts };
    },
    onError: (err, postId, context) => {
      toast.error(err?.message || 'An unexpected error occurred');

      queryClient.setQueryData(
        [EQueryKey.posts, userId],
        context?.previousPosts
      );
    },
    onSuccess: () => {
      toast.success('Post deleted successfully.');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.posts, userId] });
    },
  });
}
