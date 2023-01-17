import React from "react";
import { useState } from "react";
import axios from 'axios';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Column2,
    Img,
    ImgWrap,
    FormButton,
    FormContent,
    FormInput,
    FormLabel,
    Form,
} from "./ContactElements";

const InfoSectioncopy = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    img,
    alt,
}) => {
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [message,setMessage] = useState("");

    let nameChangeHandler = (event) =>{
        setName(event.target.value);
    }

    let emailChangeHandler = (event) =>{
        setEmail(event.target.value);
    }

    let messageChangeHandler = (event) =>{
        setMessage(event.target.value);
    }

    let submitHandler = (event) =>{
        event.preventDefault();
        let formData = {
            name:name,
            email:email,
            message:message
        }
        // sheet url = 'https://docs.google.com/spreadsheets/d/1M9wrrCrsbY2NqEAWA4HtMEENgGaxBJ3DiPzRSS6feHw/edit?usp=sharing'
        axios.post('https://sheet.best/api/sheets/b89db96c-4047-4037-8d13-e0f289b9a2ba',formData).then(response=>{
            console.log(response);
        });

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <FormContent>
                                    <Form style={{"padding":"50px 32px"}} onSubmit={submitHandler}>
                                        <FormLabel htmlfor="for">Name</FormLabel>
                                        <FormInput type="text" value={name} onChange={nameChangeHandler} required></FormInput>
                                        <FormLabel htmlfor="for">Email</FormLabel>
                                        <FormInput type="email" value={email} onChange={emailChangeHandler} required></FormInput>
                                        <FormLabel htmlFor="for">Message</FormLabel>
                                        <textarea style={{"padding":"16px 16px","marginBottom":"32px","border":"none","borderRadius":"4px"}} rows={4} value={message} onChange={messageChangeHandler}/> 
                                        <FormButton type="submit">Continue</FormButton>
                                    </Form>
                                </FormContent>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSectioncopy;
