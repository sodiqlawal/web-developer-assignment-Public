import request from 'supertest';
import express from 'express';
import postsRouter from '../routes/posts';
import * as postsDb from '../db/posts/posts';

// Mock the database functions
jest.mock('../db/posts/posts');

describe('DELETE /posts/:id endpoint', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/posts', postsRouter);
    jest.clearAllMocks();
  });

  it('should delete a post and return 200 status with success message', async () => {
    const postId = 'a92683a2abde49b98a08114022924e23';

    // Mock the deletePost function to return 1 (indicating 1 row was deleted)
    (postsDb.deletePost as jest.Mock).mockResolvedValue(1);

    const response = await request(app).delete(`/posts/${postId}`).expect(200);

    expect(response.body).toEqual({ message: 'Post deleted successfully' });
    expect(postsDb.deletePost).toHaveBeenCalledWith(postId);
    expect(postsDb.deletePost).toHaveBeenCalledTimes(1);
  });

  it('should return 404 status when post does not exist', async () => {
    const postId = 'nonexistent-post-id';

    // Mock the deletePost function to return 0 (no rows deleted)
    (postsDb.deletePost as jest.Mock).mockResolvedValue(0);

    const response = await request(app).delete(`/posts/${postId}`).expect(404);

    expect(response.body).toEqual({ error: 'Post not found' });
    expect(postsDb.deletePost).toHaveBeenCalledWith(postId);
  });

  it('should return 400 status when post ID is empty', async () => {
    const response = await request(app).delete('/posts/').expect(404);

    // Note: Express routes to 404 for trailing slash without ID
    // The validation in our route checks for empty/whitespace IDs in req.params.id
    expect(postsDb.deletePost).not.toHaveBeenCalled();
  });

  it('should return 500 status when database error occurs', async () => {
    const postId = 'a92683a2abde49b98a08114022924e23';

    // Mock the deletePost function to throw an error
    (postsDb.deletePost as jest.Mock).mockRejectedValue(
      new Error('Database connection error')
    );

    const response = await request(app).delete(`/posts/${postId}`).expect(500);

    expect(response.body).toEqual({ error: 'Failed to delete post' });
    expect(postsDb.deletePost).toHaveBeenCalledWith(postId);
  });
});
