import { connection } from "../connection";
import { selectPostsTemplate, deletePostTemplate, insertPostTemplate } from "./query-templates";
import { Post } from "./types";
import { randomUUID } from "crypto";

export const getPosts = (userId: string): Promise<Post[]> =>
  new Promise((resolve, reject) => {
    connection.all(selectPostsTemplate, [userId], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results as Post[]);
    });
  });

export const deletePost = (postId: string): Promise<number> =>
  new Promise((resolve, reject) => {
    connection.run(deletePostTemplate, [postId], function(error: Error | null) {
      if (error) {
        reject(error);
      }
      resolve(this.changes);
    });
  });

export const createPost = (userId: string, title: string, body: string): Promise<Post> =>
  new Promise((resolve, reject) => {
    const postId = randomUUID();
    connection.run(
      insertPostTemplate,
      [postId, userId, title, body],
      function(error: Error | null) {
        if (error) {
          reject(error);
        }
        resolve({
          id: postId,
          user_id: userId,
          title,
          body,
          created_at: new Date().toISOString(),
        });
      }
    );
  });
