import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 25px;
`;

export const Results = styled.div`
    font-size: 40px;
`;

export const FilterOption = styled.div`
    display: flex;
    margin: 25px auto; 
    flex-direction: row;
    justify-content: space-between;
    flex-flow: row wrap;
    button{
        margin: 5px 0;
        flex-flow: wrap;
        border: none;
        width: 150px;
        line-height: 35px;
        background-color: #e6e6e6;
        color: #313131;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }
    button:hover{
        background-color:#313940;
        color: #FFF;
        transition: 0.2s;
    }
`;