import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';


const FormItem = Form.Item;

const CustomForm = ({requestType,articleID,btnText,handleUpdate}) => {

    const handleFormSubmit = (event,requestType, articleID) => { 
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
    
        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                    .then((res) => {
                        // handleUpdate(res.data); // this does not work
                        console.log(res);
                    })
                    .catch((err) => console.error(err));

            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then((res) => {
                    handleUpdate(res.data);
                    console.log(res);
                })
                    .catch((err) => console.error(err));
        
            default:
                return console.log('not valid request Type');
        }

    }

    return ( 
        <div>
            <Form onSubmitCapture={(event)=>handleFormSubmit(event,requestType,articleID)} >
                <FormItem label="Title">
                    <Input name='title' placeholder='Put title' />
                </FormItem>
                <FormItem label="Content">
                    <Input name='content' placeholder='Put Some content' />
                </FormItem>
                <FormItem>
                    <Button type='primary' htmlType='submit'>{ btnText}</Button>
                </FormItem>
            </Form>
        </div> 
     );
}
 
export default CustomForm;