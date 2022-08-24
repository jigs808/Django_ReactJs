import React, { Component } from 'react';
import Articles from '../components/Article';
import axios from 'axios';
import CustomForm from '../components/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// const data = Array.from({
//     length: 23,
//   }).map((_, i) => ({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   }));
 
const ArticleList = () => {
    const [articles, setArticles] = useState([])
     let location = useLocation()
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/')
            .then((res) => {
                setArticles(res.data);
                console.log(res.data);
            }
            );
    },[location]
    
    );
    

    
        return (
            <div>
                <Articles data={articles} />
                <br />
                <h2>Create new Article</h2>
                <CustomForm requestType='post' btnText='Create' handleUpdate={setArticles} />
                
            </div>
        );
    
 }
  
 export default ArticleList;