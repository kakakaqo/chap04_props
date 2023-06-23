
export default function Comment(props) {
    const {title, content, author} = props;
    return (
        <div>
            <h2>제목 : {title}</h2>
            <p>내용 : {content}</p>
            <p>작성자 : {author}</p>
        </div>
    );
}