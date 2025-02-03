import styled from 'styled-components';

const Container = styled.div`
    padding: 30px;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 12px;
    background: linear-gradient(145deg, #f9f9f9, #ffffff);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Button = styled.button`
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(135deg, #2575fc, #6a11cb);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

const Input = styled.input`
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 100%;
    font-size: 16px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
    border-color: #6a11cb;
    box-shadow: 0 0 8px rgba(106, 17, 203, 0.3);
    outline: none;
    }

    &::placeholder {
    color: #999;
    }
`;

const SuperheroList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const SuperheroListItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid #ccc;
    &:last-child {
    border-bottom: none;
    }
`;

const SuperheroInfo = styled.span`
    font-weight: bold;
`;

const HumilityScore = styled.span`
    font-size: 12px;
    color: #666;
`;

export {
    Container,
    Button,   
    Input,
    SuperheroList,
    SuperheroListItem,
    SuperheroInfo,
    HumilityScore,
};
