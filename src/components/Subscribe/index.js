import React, { useState } from 'react';
import { SubscribeContainer, SubscribeWrapper, Form, Button, Input} from './SubscribeElements';

const Subscribe = () => {
    const [input, setInput] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if(input){
            console.log(input);
        }
    };
    return (
      <SubscribeContainer>
          <SubscribeWrapper>
            <Form onSubmit = {submitHandler}>
                <Input type = "email" onChange= {inputHandler} placeholder= "Enter your Email ID" />
                <Button type="submit">Subscribe</Button>
            </Form>
          </SubscribeWrapper>
      </SubscribeContainer>
    );
  };
  
  export default Subscribe;