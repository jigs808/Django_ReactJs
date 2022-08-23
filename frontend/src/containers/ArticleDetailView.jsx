import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';



 
const ArticleDetail = () => {
    const [article, setArticle] = useState({});

    let { articleID } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then((res) => {
                setArticle(res.data );
                console.log(res.data);
            }
            );
    } , [articleID]
    );
      
        return (
            <Card title={article.title}>
                <p>{ article.content}</p>

            </Card>
        );
    }
 
  
 export default ArticleDetail;