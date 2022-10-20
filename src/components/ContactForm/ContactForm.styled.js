
import styled from '@emotion/styled'

export const PhoneForm = styled.form`
display: flex;
flex-direction: column;
width: 350px;
margin: 0 auto 20px auto;
padding: 10px;
border-radius: 5px;
border: 0.1px solid #000; 
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`

export const NameLabel = styled.label`
margin-bottom: 10px;
font-size: 15px;
line-height: 1.17;
text-align:start;
`
export const NumberLabel = styled.label`
margin-bottom: 10px;
font-size: 15px;
line-height: 1.17;
text-align:start;
`

export const InputNameField = styled.input`
min-height: 20px;
margin-bottom: 30px;
border: 1px solid #000;
border-radius: 4px;
transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

:hover, :focus {
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
}
`
export const InputNumberField = styled.input`
min-height: 20px;
margin-bottom: 30px;
border: 1px solid #000;
border-radius: 4px;
transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

:hover, :focus {
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
}
`
export const FormButton = styled.button`
width: 100px;
min-height: 30px;
margin: 0 auto;
border-radius: 5px;
background-color: lightgray;
transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1), border 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

:hover, :focus {
background-color: lightblue;
border: 1px solid #000;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
}
`

