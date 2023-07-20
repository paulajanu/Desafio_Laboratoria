import { FaBars, FaSearch } from "react-icons/fa";
import styled from 'styled-components';

export const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const IconeMenu = styled(FaBars)`
    font-size: 28px;
    color: #ffffff;
    margin-left: 12px;
    cursor: pointer;
`;

export const LogoImagem = styled.img `
    height: 70px;
    // margin-left: 40px;
    // margin-right: 20px;

    @media (max-width: 768px) {
        height: 50px;
        // margin-left: 3.5vw;
        margin-top: 3.5vw;
    }
`;

export const IconePesquisa = styled(FaSearch)`
    font-size: 26px;
    color: #ffffff;
    margin-right: 12px;
    cursor: pointer;
`;