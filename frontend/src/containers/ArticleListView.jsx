import React, { Component } from 'react';
import Articles from '../components/Article';
import axios from 'axios';

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
 
class ArticleList extends Component {
    state = { 
        articles:[]
    } 
    
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then((res) => {
                this.setState({ articles: res.data });
                console.log(res.data);
            }
            );
    }
    render() { 
        return (
            <Articles data={ this.state.articles} />
        );
    }
 }
  
 export default ArticleList;