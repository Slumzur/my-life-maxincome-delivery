import React, {useEffect, useState} from "react";
import * as S from './styles';
import { H5, BodyL } from "***";
import percentIcon from './images/percent-icon.svg'
import calendarIcon from './images/bag-icon.svg'
import giftIcon from './images/gift-icon.svg'
import clientIcon from './images/client-icon.svg'

export const AdvantagesBlockShort = ({maxIncomePercent, maxIncomeAdvantage1, maxIncomeAdvantage2, maxIncomeAdvantage3, maxIncomeAdvantage4}) => {

    return (
        <S.Wrapper>
            <S.Item>
                <S.Icon src={percentIcon}/>
                <S.ItemHeader><H5>{maxIncomePercent}</H5></S.ItemHeader>
                <S.ItemText><BodyL>годовых по вкладу</BodyL></S.ItemText>
            </S.Item>
            <S.Item>
                <S.Icon src={calendarIcon}/>
                <S.ItemHeader><H5>{maxIncomeAdvantage1}</H5></S.ItemHeader>
                <S.ItemText><BodyL></BodyL></S.ItemText>
            </S.Item>
            <S.Item>
                <S.Icon src={giftIcon}/>
                <S.ItemHeader><H5>{maxIncomeAdvantage2}</H5></S.ItemHeader>
                <S.ItemText><BodyL>{maxIncomeAdvantage3}</BodyL></S.ItemText>
            </S.Item>
            <S.Item>
                <S.Icon src={clientIcon}/>
                <S.ItemHeader><H5>{maxIncomeAdvantage4}</H5></S.ItemHeader>
                <S.ItemText><BodyL></BodyL></S.ItemText>
            </S.Item>
        </S.Wrapper>
    );
};
