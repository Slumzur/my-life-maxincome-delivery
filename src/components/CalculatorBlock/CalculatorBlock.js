import React from "react";
import * as S from './styles';
import { H3, BodyL, Accordion, AccordionHeader, AccordionBody } from "***";
import {CalculatorMaxIncome} from "***/calculator-deposit-maxIncome/dist";

export const CalculatorBlock = ({maxIncomePercent}) => {

    return (
        <S.Wrapper>
            <Accordion>
                <AccordionHeader>
                    <S.HeaderContent>
                        <H3>Рассчитайте выгоду по вкладу</H3>
                        <S.SubHeader>
                            <H3>{maxIncomePercent}</H3>
                            <BodyL>годовых</BodyL>
                        </S.SubHeader>
                    </S.HeaderContent>
                </AccordionHeader>
                <AccordionBody>
                    <CalculatorMaxIncome/>
                </AccordionBody>
            </Accordion>
        </S.Wrapper>
    );
};
