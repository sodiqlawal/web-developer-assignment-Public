import { Icons } from '@/components/icons';
import DeletePostModal from '@/components/posts/DeletePostModal';
import useController from '@/hooks/useController';
import { Post } from '@/types/post';

interface Props {
  post: Post;
}
const PostCard = ({ post }: Props) => {
  if (!post) return null;
  const deleteWarningController = useController();

  return (
    <div className='w-full h-[293px] space-y-[16px] p-6 pb-1 rounded-[8px] border border-gray-500 bg-white shadow-card relative overflow-auto no-scrollbar'>
      <h1 className='text-lg font-[500] leading-[1.56] text-dark-500'>
        {post.title}
      </h1>
      <p
        className='text-sm leading-[1.43] text-dark-500 wrap-anywhere line-clamp-6'
        title={post.body}
      >
        {post.body}
      </p>
      <div
        className='absolute top-[4px] right-[4px] cursor-pointer p-[6px]'
        onClick={deleteWarningController.open}
      >
        <Icons.delete className='hidden sm:block' />
        <Icons.delete
          width='18'
          height='18'
          className='block sm:hidden'
        />
      </div>
      <DeletePostModal controller={deleteWarningController} post={post} />
    </div>
  );
};

export default PostCard;
