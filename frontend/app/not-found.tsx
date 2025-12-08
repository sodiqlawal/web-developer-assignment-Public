export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center bg-white text-center px-4'>
      <h1 className='text-5xl font-bold text-dark-500 mb-4'>Page Not Found</h1>
      <p className='text-gray-600 mb-8'>
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <a
        href='/'
        className='px-4 py-2 border border-dark-500 text-dark-500 rounded-md hover:bg-dark-500 hover:text-white transition duration-300'
      >
        Go to Homepage
      </a>
    </div>
  );
}
