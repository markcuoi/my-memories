import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={0}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6} sx={{ p: 1 }}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;