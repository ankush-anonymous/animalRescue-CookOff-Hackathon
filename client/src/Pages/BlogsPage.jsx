import NavbarComponent from "../Components/NavbarComponent";
import React, { useState, useEffect } from "react";
import axios from "axios";
// const BlogsData = [
//   {
//     _id: "65d3961851fa7a3c99e5d590",
//     author: "DogLover",
//     title: "The Joys of Dog Ownership",
//     description:
//       "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
//     photo:
//       "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
//     body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
//     isModify: false,
//     dateOfModification: "10 Feb",
//     __v: 0,
//   },
//   {
//     _id: "65d3961851fa7a3c99e5d590",
//     author: "DogLover",
//     title: "The Joys of Dog Ownership",
//     description:
//       "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
//     photo:
//       "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
//     body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
//     isModify: false,
//     dateOfModification: "10 Feb",
//     __v: 0,
//   },
//   {
//     _id: "65d3961851fa7a3c99e5d590",
//     author: "DogLover",
//     title: "The Joys of Dog Ownership",
//     description:
//       "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
//     photo:
//       "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
//     body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
//     isModify: false,
//     dateOfModification: "10 Feb",
//     __v: 0,
//   },
//   {
//     _id: "65d3961851fa7a3c99e5d590",
//     author: "DogLover",
//     title: "The Joys of Dog Ownership",
//     description:
//       "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
//     photo:
//       "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
//     body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
//     isModify: false,
//     dateOfModification: "10 Feb",
//     __v: 0,
//   },
//   {
//     _id: "65d3961851fa7a3c99e5d590",
//     author: "DogLover",
//     title: "The Joys of Dog Ownership",
//     description:
//       "Explore the wonderful world of dogs and the joys they bring to our lives. From different breeds to training tips, learn everything you need to know about being a happy dog owner.",
//     photo:
//       "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
//     body: "Dogs are amazing companions, and in this blog post, we'll delve into the various aspects of dog ownership. From choosing the right breed to training techniques and heartwarming stories, discover why dogs truly are man's best friend.",
//     isModify: false,
//     dateOfModification: "10 Feb",
//     __v: 0,
//   },
// ];

function BlogsPage() {
  const [BlogsData, setBlogsData] = useState([]);
  useEffect(() => {
    fetchBlogsData();
  }, []);

  const fetchBlogsData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/blogs");
      setBlogsData(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    }
  };
  const lastBlog = BlogsData[BlogsData.length - 1];
  const secondLastBlog = BlogsData[BlogsData.length - 2];
  const thirdLastBlog = BlogsData[BlogsData.length - 3];
  const fourthLastBlog = BlogsData[BlogsData.length - 4];

  return (
    <>
      <NavbarComponent />
      <div className=" box-border p-0 sm:p-4 relative">
        {/* Background Image with Dim Overlay */}
        <div className="mb-2 h-[600px]">
          {lastBlog && (
            <div
              className="border-box w-full h-full relative"
              style={{
                backgroundImage: `url(${lastBlog.photo})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              {/* Semi-transparent Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Text Content */}
              <div className="absolute w-full h-full flex items-center justify-center text-center text-white font-bold">
                <div className="w-full sm:w-2/3">
                  <p className="text-5xl sm:text-7xl">{lastBlog.title}</p>
                  <p className="sm:text-xl p-2 sm:p-12 text-gray-300">
                    {lastBlog.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="box-border w-full flex">
          <div className="w-1/2 bg-red-400 m-1">
            {secondLastBlog && (
              <div
                className="border-box w-full h-full relative"
                style={{
                  backgroundImage: `url(${secondLastBlog.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Semi-transparent Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Text Content */}
                <div className="absolute w-full h-full flex items-center justify-center text-start text-white font-bold">
                  <div className="p-10">
                    <p className="text-6xl">{secondLastBlog.title}</p>
                    <p className="text-l text-gray-300">
                      {secondLastBlog.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-1/3 m-1 flex">
            <div className="w-3/4 m-1">
              {thirdLastBlog && (
                <div className="w-full h-96 mb-5 ">
                  {/* ThirdLast  */}
                  <div
                    className="border-box w-full h-full relative"
                    style={{
                      backgroundImage: `url(${thirdLastBlog.photo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Semi-transparent Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    {/* Text Content */}
                    <div className="absolute w-full h-full flex items-end justify-center text-center text-white font-bold p-1">
                      <div className="w-full">
                        <p className="text-4xl">{thirdLastBlog.title}</p>
                        <p className="text-sm text-gray-300">
                          {thirdLastBlog.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="w-full h-96">
                {fourthLastBlog && (
                  <div
                    className="border-box w-full h-full relative"
                    style={{
                      backgroundImage: `url(${fourthLastBlog.photo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Semi-transparent Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    {/* Text Content */}
                    <div className="absolute w-full h-full flex items-end justify-center text-start text-white font-bold p-1">
                      <div className="w-full">
                        <p className="text-start text-4xl">
                          {fourthLastBlog.title}
                        </p>
                        <p className="text-sm text-gray-600 bg-yellow-300 p-1">
                          {fourthLastBlog.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-1/3 text-center ml-2 border ">
            <div className="h-32 w-full  ">
              <p className="text-center font-semibold p-4 text-2xl bg-gray-400 mb-2">
                More Blogs
              </p>
              {BlogsData.map((blog, index) => (
                <OtherBlogs blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsPage;

function OtherBlogs({ blog }) {
  return (
    <div className="w-full h-24 flex mb-2 border">
      <div className="w-40 h-full flex justify-center">
        <img src={blog.photo} className=" object-cover" alt="" />
      </div>
      <div className="text-md font-semibold w-full text-center pt-2">
        {blog.title}
      </div>
    </div>
  );
}
