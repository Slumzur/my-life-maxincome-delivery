import React, {useEffect, useState} from "react";
import * as S from './styles';
import { H1, TitleBody } from "***";
import {scrollTo} from '../App/App'

export const TopBlock = ({header, headLine, subTitle, actualCity, productCities, onActualCityChange }) => {
    return (
        <S.Wrapper>
            <S.Content>
                <S.LogoCityWrapper>
                    <S.Logo href='***' target='_blank'/>
                    <S.StyledDeterminationOfCity actualCity={actualCity} productCities={productCities} onActualCityChange={onActualCityChange} />
                </S.LogoCityWrapper>
                <S.TextSection>
                    <H1>Вклад «{header}»</H1>
                    <TitleBody>
                      <div>{subTitle}</div>
                      <div>{headLine}</div>
                    </TitleBody>
                </S.TextSection>
                <S.InterestRate/>
                <S.Button1 onClick={() => scrollTo('howToOpenDeposit')}>Подробнее</S.Button1>
            </S.Content>
        </S.Wrapper>
    );
};
