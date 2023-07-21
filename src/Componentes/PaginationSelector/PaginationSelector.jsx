import React from "react";
import { CardsPorPagina, ContainerCardsPorpagina, ParagrafoCardsPorPagina } from "./Styled";

const PaginationSelector = ({cardsPerPage, setCardsPerpage}) => {
    return (
        <ContainerCardsPorpagina>
            <ParagrafoCardsPorPagina>Cards por página:</ParagrafoCardsPorPagina>
            <CardsPorPagina value={cardsPerPage} onChange={(e) => setCardsPerpage(Number(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
            </CardsPorPagina>
        </ContainerCardsPorpagina>
    )
} 

export default PaginationSelector;