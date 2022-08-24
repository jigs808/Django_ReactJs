import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Card,Button, Form } from 'antd';
import { useLocation, useParams } from 'react-router-dom';
import CustomForm from '../components/Form';



 
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
    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/`)
            .then((res) => {
                setArticle(res.data );
                console.log(res.data);
            }
        );

        
    }
      
    return (
            <>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <br />
            <CustomForm requestType='put' articleID={articleID} btnText='Update'
            handleUpdate={setArticle}
            />
            <Form onSubmitCapture={handleDelete}>
                    <Button type='danger' htmlType='submit'>Delete</Button>
            </Form>
            </>
        );
    }
 
  
 export default ArticleDetail;