import { Router, Request, Response } from "express";
import { getPosts, deletePost, createPost } from "../db/posts/posts";
import { getUserById } from "../db/users/users";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const userId = req.query.userId?.toString();
    if (!userId || userId.trim() === "") {
      res.status(400).json({ error: "userId is required" });
      return;
    }
    const posts = await getPosts(userId);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { userId, title, body } = req.body;

    // Validate input
    if (!userId || typeof userId !== 'string' || userId.trim() === '') {
      res
        .status(400)
        .json({ error: 'Invalid userId: must be a non-empty string' });
      return;
    }

    if (!title || typeof title !== 'string' || title.trim() === '') {
      res
        .status(400)
        .json({ error: 'Invalid title: must be a non-empty string' });
      return;
    }

    if (!body || typeof body !== 'string' || body.trim() === '') {
      res
        .status(400)
        .json({ error: 'Invalid body: must be a non-empty string' });
      return;
    }

    // Check if user exists
    const user = await getUserById(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const newPost = await createPost(userId, title.trim(), body.trim());
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    
    if (!postId || postId.trim() === "") {
      res.status(400).json({ error: "Invalid post ID" });
      return;
    }

    const changes = await deletePost(postId);
    
    if (changes === 0) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

export default router;
