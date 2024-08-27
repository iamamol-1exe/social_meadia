import { useContext, useRef } from "react";
import { PostList as PostListData } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostListData);

  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const handleSubmit = (event) => {
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    postTitleElement.current.value = "";
    postBodyElement.current.values = "";
    addPost(postTitle, postBody);
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      {" "}
      <h2>Create a Post</h2>
      <div className="mb-3 createpost">
        <label htmlFor="Title" className="form-label">
          Post title:
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Your Post title"
        />
      </div>
      {/*  */}
      <div className="mb-3 createpost">
        <label htmlFor="body" className="form-label">
          Post body:
        </label>
        <textarea
          ref={postBodyElement}
          type="text"
          rows="3"
          className="form-control"
          id="body"
          placeholder="Your Post body"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreatePost;
