import React, {useEffect, useState} from "react";
import * as S from './styles';
import { H3, BodyL } from "***";
import {PoraFormDelivery} from '***/my-life-delivery/dist';
import boxIcon from './images/boxIcon.svg'
import { Element } from 'react-scroll';

export const FormBlock = ({ actualCity, productCities,thanksPage }) => {

    return (
        <Element name='form'>
            <S.Wrapper>
                <S.Header>
                    <H3>Заполните заявку и оформите карту за 5 минут </H3>
                    <S.Banner>
                        <img src={boxIcon} alt="коробка"/>
                        <BodyL>Бесплатно доставим карту до дома уже на следующий день</BodyL>
                    </S.Banner>
                </S.Header>
                <PoraFormDelivery
                    rule={'***'}
                    actualCity={actualCity}
                    productCities={productCities}
                    thanksPage={thanksPage}
                />
            </S.Wrapper>
        </Element>
    );
};
