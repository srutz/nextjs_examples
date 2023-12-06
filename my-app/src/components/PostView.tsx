import { Post } from "./Post"
import classes from "./PostView.module.css"


export type PostViewProps = {
    post: Post
}

export function PostView(props: PostViewProps) {
    const post = props.post
    return (
        <div className={classes.post}>
            <div className={classes.posttitle}>{post.title}</div>
            <div className={classes.postbody}>{post.body}</div>
        </div>
    )
}