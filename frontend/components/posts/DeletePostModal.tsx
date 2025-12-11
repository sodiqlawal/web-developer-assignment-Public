import { Controller } from '@/hooks/useController';
import Modal from '../ui/Modal';
import { useParams } from 'next/navigation';
import { useDeletePost } from '@/services/posts/hooks/useDeletePost';
import { Icons } from '../icons';
import Button from '../ui/Button';
import { Post } from '@/types/post';

interface Props {
  controller: Controller;
  post: Post;
}

const DeletePostModal = ({ controller, post }: Props) => {
  const params = useParams<{ 'user-id': string }>();
  const { mutate } = useDeletePost(params['user-id']);

  const handleDeletePost = () => {
    mutate(post?.id || '');
  };

  return (
    <Modal
      controller={controller}
      title='Delete Post'
      className='md:max-w-[448px] min-h-fit'
      textClassName='sm:text-xl font-semibold mb-6'
    >
      <div>
        <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4'>
          <Icons.warning />
        </div>
        <p className='text-sm text-center text-dark-500 mb-6'>
          <span>
            Are you sure you want to permanently delete{' '}
            <span className='font-bold italic'>{post.title}</span> post ?
          </span>{' '}
          <span className='mt-1 block'>This action cannot be undone.</span>
        </p>
        <div className='flex space-x-3 justify-center'>
          <Button
            title='Cancel'
            isOutlined
            onClick={controller.close}
          />
          <Button
            title='Delete'
            isDanger
            onClick={handleDeletePost}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeletePostModal;
