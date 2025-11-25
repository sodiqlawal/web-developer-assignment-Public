import { Router, Request, Response } from "express";

import { getUsers, getUsersCount } from "../db/users/users";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const pageNumber = Number(req.query.pageNumber) || 0;
    const pageSize = Number(req.query.pageSize) || 4;
    
    if (!Number.isInteger(pageNumber) || pageNumber < 0) {
      res.status(400).json({ error: "Invalid pageNumber: must be a non-negative integer" });
      return;
    }
    
    if (!Number.isInteger(pageSize) || pageSize < 1) {
      res.status(400).json({ error: "Invalid pageSize: must be a positive integer" });
      return;
    }

    const users = await getUsers(pageNumber, pageSize);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

router.get("/count", async (req: Request, res: Response) => {
  try {
    const count = await getUsersCount();
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ error: "Failed to fetch user count" });
  }
});

export default router;
