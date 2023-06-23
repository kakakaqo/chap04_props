
import Comment from './Comment';

export default function Post(props) {
    const {title, content, author} = props;
    return (
        <Comment title={title} content={content} author={author} />
    );
}