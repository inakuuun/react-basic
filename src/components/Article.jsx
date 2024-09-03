import PublishButton from './PublishButton';

const Article = (props) =>{
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.delivery}</p>
            <PublishButton />
        </div>
    );
};

export default Article;