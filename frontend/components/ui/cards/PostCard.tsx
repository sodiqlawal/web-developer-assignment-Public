import { Icons } from '@/components/icons';
import { useDeletePost } from '@/services/posts/hooks/useDeletePost';
import { Post } from '@/types/post';
import { useParams } from 'next/navigation';

interface Props {
  post: Post;
}
const PostCard = ({ post }: Props) => {
  if (!post) return null;
  const params = useParams<{ 'user-id': string }>();
  const userId = params['user-id'] || '';

  const { mutate } = useDeletePost(userId);

  const handleDelete = () => {
    mutate(post.id);
  };

  return (
    <div className='w-full h-[293px] space-y-[16px] p-6 pb-1 rounded-[8px] border border-gray-500 bg-white shadow-card relative overflow-auto no-scrollbar'>
      <h1 className='text-lg font-[500] leading-[1.56] text-dark-500'>
        {post.title}
      </h1>
      <p
        className='text-sm leading-[1.43] text-dark-500 line-clamp-6'
        title={post.body}
      >
        {post.body}
      </p>
      <div
        className='absolute top-[4px] right-[4px] cursor-pointer p-[6px]'
        onClick={handleDelete}
      >
        <Icons.delete />
      </div>
    </div>
  );
};

export default PostCard;
