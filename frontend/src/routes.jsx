import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';



const BaseRouter = () =>{
    return (
            <Routes>
                

                <Route path="/" element={<ArticleList/>} />
                <Route path="/:articleID" element={<ArticleDetail/>} />
                
            </Routes>
    
        
    )};

 
export default BaseRouter;