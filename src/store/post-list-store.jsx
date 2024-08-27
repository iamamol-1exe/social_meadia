import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [];

export const PostList = createContext({});

const postListReducer = (currPostList, action) => {
  let newpostList = currPostList;
  if (action.type === "DELETE_POST") {
    newpostList = currPostList.filter(
      (post) => post.id !== action.payload.PostId
    );
  } else if (action.type === "ADD_POST") {
    newpostList = [action.payload, ...currPostList];
  }
  return newpostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (postTitle, postBody) => {
    console.log(postTitle, postBody);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(), // Convert to string
        title: postTitle,
        body: postBody,
        reactions: 0,

        tags: [], // Initialize tags as an empty array or add them if needed
      },
    });
  };

  const deletePost = (PostId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        PostId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
