import { useContext } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import { PostList as PostListData } from "../store/post-list-store";
const PostList = () => {
  const { postList } = useContext(PostListData);
  console.log(postList);
  return (
    <div className={styles.container}>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
