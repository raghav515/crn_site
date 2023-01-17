import styled from "styled-components";


export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: 0;
    margin-left: 0;
    padding: 0 24px;
    justify-content:start;
    
`;

export const InfoRow = styled.div`
    display: grid;
    height: 860px;
    max-width: 1920px;
    width: 100%;
    margin-right: 0;
    margin-left: 100px;
    grid-auto-columns: max-content;
    
    padding-top:50px;
    grid-gap:0px 200px;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;

    padding: 100px 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 700px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.div`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    margin-left:60px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.div`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    width:700px;
    align-items:stretch;
    flex-direction: column;
    border-radius: 5px;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 700px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 14px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;