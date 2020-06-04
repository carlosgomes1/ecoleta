import express from "express";

const routes = express.Router();

routes.get("/users", (req, res) => {
    return res.json({ name: "Carlos" });
});

export default routes;
