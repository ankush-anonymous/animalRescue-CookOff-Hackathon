import { Box, Typography } from "@mui/material";
import React from "react";

const AllBlogsListComponent = () => {
  const BlogsData = [
    {
      _id: "65d3961851fa7a3c99e5d590",
      author: "DogLover",
      title: "The Joys of Dog Ownership",
      description:
        "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
      photo:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
      isModify: false,
      dateOfModification: "10 Feb",
      __v: 0,
    },
    {
      _id: "65d3961851fa7a3c99e5d590",
      author: "DogLover",
      title: "The Joys of Dog Ownership",
      description:
        "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
      photo:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
      isModify: false,
      dateOfModification: "10 Feb",
      __v: 0,
    },
    {
      _id: "65d3961851fa7a3c99e5d590",
      author: "DogLover",
      title: "The Joys of Dog Ownership",
      description:
        "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
      photo:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
      isModify: false,
      dateOfModification: "10 Feb",
      __v: 0,
    },
    {
      _id: "65d3961851fa7a3c99e5d590",
      author: "DogLover",
      title: "The Joys of Dog Ownership",
      description:
        "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
      photo:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
      isModify: false,
      dateOfModification: "10 Feb",
      __v: 0,
    },
    {
      _id: "65d3961851fa7a3c99e5d590",
      author: "DogLover",
      title: "The Joys of Dog Ownership",
      description:
        "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
      photo:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
      isModify: false,
      dateOfModification: "10 Feb",
      __v: 0,
    },
  ];
  return (
    <Box
      sx={{
        maxHeight: 400, // Adjust the maximum height as needed
        maxWidth: 500,
        overflowY: "auto",
        padding: "20px",
      }}
    >
      {BlogsData.map((blog) => (
        <Box
          key={blog._id}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <img
            src={blog.photo}
            alt={blog.title}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
          <Box>
            <Typography variant="h6">{blog.title}</Typography>
            <Typography variant="body2">
              {blog.description.slice(0, 50)}...
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AllBlogsListComponent;
