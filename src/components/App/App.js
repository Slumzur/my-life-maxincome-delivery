import React, {useEffect, useState} from "react";
import * as S from './styles';
import {Body1, Footer, H6} from "***";
import { Constants } from "../../hooks/Constants";
import { TopBlock } from "../TopBlock/TopBlock";
import { AdvantagesBlockShort } from "../AdvantagesBlockShort/AdvantagesBlockShort";
import { HowToOpenDeposit } from "../HowToOpenDeposit/HowToOpenDeposit";
import { CalculatorBlock } from "../CalculatorBlock/CalculatorBlock";
import { FormBlock } from "../FormBlock/FormBlock";
import { AdvantagesBlockMain } from "../AdvantagesBlockMain/AdvantagesBlockMain";
import { DetailedConditions } from "../DetailedConditions/DetailedConditions";
import { scroller } from "react-scroll";
import {MirSVG} from "../MirSVG";
import styled from "styled-components";

export const App = () => {
    const depositParams = Constants();
    const [productCities, setProductCities] = useState( []);
    const [actualCity, setActualCity] = useState( {});

    useEffect(() => {
        const geoIP = () => {
            fetch("***")
                .then((response) => response.json())
                .then((data) => {
                    if (!data) {
                        return;
                    }
                    setActualCity(data);
                });
        };
        const getCityArray = () => {
            fetch(
                "***"
            )
                .then((response) => response.json())
                .then((result) => { setProductCities(result.sort((a, b) => a.name.localeCompare(b.name, "ru"))) });
        };

        geoIP();
        getCityArray();
    }, []);

    return (
        <S.Page>
            <TopBlock
                header={depositParams.MaxIncomeName}
                headLine={depositParams.MaxIncomeHeadline}
                subTitle={depositParams.MaxIncomeSubtitle}
                actualCity={actualCity}
                productCities={productCities}
                onActualCityChange={setActualCity}
            />
            <S.Main>
                <AdvantagesBlockShort
                    maxIncomePercent={depositParams.MaxIncomePercent}
                    maxIncomeAdvantage1={depositParams.MaxIncomeAdvantage1}
                    maxIncomeAdvantage2={depositParams.MaxIncomeAdvantage2}
                    maxIncomeAdvantage3={depositParams.MaxIncomeAdvantage3}
                    maxIncomeAdvantage4={depositParams.MaxIncomeAdvantage4}
                />
                <HowToOpenDeposit/>
                <CalculatorBlock
                    maxIncomePercent={depositParams.MaxIncomePercent}
                />
                <InfoBlock>
                    <ImgBlock><MirSVG/></ImgBlock>
                    <Body1>После обработки заявки вам будет доставлена карта «My&nbsp;Life» платёжной системы МИР.<br/>
                        Если вы хотите заказать карту «My&nbsp;Life» другой платёжной системы, пожалуйста, обратитесь по&nbsp;телефону горячей линии <strong>8&nbsp;(800)&nbsp;1000&#8209;200</strong></Body1>
                </InfoBlock>
                <FormBlock
                    actualCity={actualCity}
                    productCities={productCities}
                    thanksPage='maxIncome'
                />
                <AdvantagesBlockMain
                    percentCashbackInternet={depositParams.percentCashbackInternet}
                    percentCashbackCommunal={depositParams.percentCashbackCommunal}
                    percentCashbackPurchases={depositParams.percentCashbackPurchases}
                />
                <DetailedConditions
                    maxIncomePercent={depositParams.MaxIncomePercent}
                    maxIncomeMinTime={depositParams.MaxIncomeMinTime}
                    maxIncomeMiddleTime={depositParams.MaxIncomeMiddleTime}
                    maxIncomeMaxTime={depositParams.MaxIncomeMaxTime}
                    maxIncomeInterestPayment={depositParams.MaxIncomeInterestPayment}
                    maxIncomeRefill={depositParams.MaxIncomeRefill}
                    maxIncomeDate1={depositParams.MaxIncomeDate1}
                    maxIncomeBonusPercent={depositParams.MaxIncomeBonusPercent}
                    maxIncomeDate2={depositParams.MaxIncomeDate2}
                    myLifeDate={depositParams.MyLifeDate}
                    percentCashbackInternet={depositParams.percentCashbackInternet}
                    percentCashbackCommunal={depositParams.percentCashbackCommunal}
                    percentCashbackPurchases={depositParams.percentCashbackPurchases}
                />
                <S.AdvantageLink href='https://sales.ubrr.ru/fileManager/seefile?file_alias=my_life' target="_blank"><H6>Подробные  условия по карте «My Life»</H6></S.AdvantageLink>
            </S.Main>
            <Footer/>
        </S.Page>
    );
};
const ImgBlock=styled.div`
    width:100px;
  height: 30px;
  margin-right: 40px;
`

const InfoBlock=styled.div`
  background: #F5F4F4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  //margin:80px auto;
  padding:24px;
  margin: 80px 16px 0;
  flex: 0 0 auto;
  @media (min-width: 320px) {
    margin: 24px 16px 0;
    flex-direction: column;
    align-items: start;
  }
  @media (min-width: 768px) {
    margin: 80px 40px 0;
    align-items: center;

    flex-direction: row;

  }

  @media (min-width: 1024px) {
    margin: 80px 40px 0;
  }

  @media (min-width: 1440px) {
    width: 1200px;
    margin: 80px auto 0;
  }
`

export const scrollTo = (elementName) => {
    scroller.scrollTo(elementName, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
}
