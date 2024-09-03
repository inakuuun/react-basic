import React, {useState} from 'react'

const PublishButton = () => {
    const [isPublished, setIsPublished] = useState(false)
    const publishArticle = () => {
      setIsPublished(true)
    }
    return(
        <button onClick={ publishArticle }>公開状態： {isPublished.toString()}</button>
    );
};
export default PublishButton;
