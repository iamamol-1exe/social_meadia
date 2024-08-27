/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <>
      <div className={`${styles.container} post-card`}>
        <div className="card " style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              {post.title}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => deletePost(post.id)}
              >
                <MdDelete />
                <span className="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map((tags) => (
              <span
                key={tags}
                className={`${styles.tags} badge text-bg-primary `}
              >
                {tags}
              </span>
            ))}
            <div className="alert alert-success alert" role="alert">
              This Post Reacted By no People: {post.reactions}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
