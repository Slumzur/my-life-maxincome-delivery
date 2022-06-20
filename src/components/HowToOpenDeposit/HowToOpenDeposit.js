import React from "react";
import * as S from './styles';
import { H2, H4, H5, BodyM, BodyS } from "***";
import cardImg from './images/card-img.png'
import cardImg1024 from './images/card-img-1024.png'
import cardImg1440 from './images/card-img-1440.png'
import qrCodeImg from './images/qr-code.png'
import phoneImg from './images/phone-img.png'
import arrow from './images/arrow.svg'
import appStoreIcon from './images/app-store-icon.svg'
import googlePlayIcon from './images/google-play-icon.svg'
import appGalleryIcon from './images/app-gallery-icon.svg'
import { Element } from 'react-scroll';
import { scrollTo } from '../App/App'

export const HowToOpenDeposit = () => {

    const focusNumberField = (elemName) => {
        scrollTo(elemName);

        setTimeout(() => {
            const elem = document.getElementById('1_mobile');
            elem.focus();
        }, 500);
    };

    return (
        <Element name='howToOpenDeposit'>
            <S.Wrapper>
                <H2>Как открыть вклад</H2>
                <S.ItemContainer>
                    <S.Item onClick={() => focusNumberField('form')} canBeClicked={true} tabletHeight='137px'>
                        <S.Numeration><H5>1</H5></S.Numeration>
                        <S.TextWrapper>
                            <S.ItemHeader><H5>Оформите бесплатную карту «My&nbsp;Life»<img src={arrow} alt="ссылка на форму"/></H5></S.ItemHeader>
                            <S.ItemText><BodyM>Заполните заявку на сайте и получите карту с доставкой в удобное время</BodyM></S.ItemText>
                        </S.TextWrapper>
                        <S.CardImgBox>
                            <picture>
                                <source media="(min-width: 1440px)" srcSet={cardImg1440}/>
                                <source media="(min-width: 1024px)" srcSet={cardImg1024}/>
                                <img src={cardImg} alt="Карта my life"/>
                            </picture>
                        </S.CardImgBox>
                    </S.Item>
                    <S.Item tabletHeight='151px'>
                        <S.Numeration><H5>2</H5></S.Numeration>
                        <S.TextWrapper>
                            <S.ItemHeader><H5>Установите мобильное приложение УБРиР</H5></S.ItemHeader>
                            <S.ItemTextFlexible><BodyM>Для быстрой установки отсканируйте QR-код</BodyM></S.ItemTextFlexible>
                        </S.TextWrapper>
                        <S.QrCodeImgBox>
                            <S.ItemImage src={qrCodeImg} alt="QR код"/>
                        </S.QrCodeImgBox>
                        <S.StoresLinkBlock>
                            <S.Button href='https://itunes.apple.com/us/app/ubrr-mobile-bank/id787144251' target='_blank'>
                                <img src={appStoreIcon} alt="App Store icon"/>
                                <S.ButtonTextBlock>
                                    <BodyS>Скачать в</BodyS>
                                    <H4>App Store</H4>
                                </S.ButtonTextBlock>
                            </S.Button>
                            <S.Button href='https://play.google.com/store/apps/details?id=cb.ibank' target='_blank'>
                                <img src={googlePlayIcon} alt="Google Play icon"/>
                                <S.ButtonTextBlock>
                                    <BodyS>Скачать в</BodyS>
                                    <H4>Google Play</H4>
                                </S.ButtonTextBlock>
                            </S.Button>
                            <S.Button href='https://appgallery.huawei.com/?yclid=7366647764986407186#/app/C103215869' target='_blank'>
                                <img src={appGalleryIcon} alt="App Gallery icon"/>
                                <S.ButtonTextBlock>
                                    <BodyS>Скачать в</BodyS>
                                    <H4>AppGallery</H4>
                                </S.ButtonTextBlock>
                            </S.Button>
                        </S.StoresLinkBlock>
                    </S.Item>
                    <S.Item tabletHeight='164px'>
                        <S.Numeration><H5>3</H5></S.Numeration>
                        <S.TextWrapper>
                            <S.ItemHeader><H5>Откройте вклад онлайн</H5></S.ItemHeader>
                            <S.ItemText><BodyM>В разделе «Открыть вклад или счёт» выберите вклад, условия и нажмите на&nbsp;кнопку «Открыть»</BodyM></S.ItemText>
                        </S.TextWrapper>
                        <S.PhoneImgBox>
                            <S.ItemImage src={phoneImg} alt="Мобильное приложение"/>
                        </S.PhoneImgBox>
                    </S.Item>
                </S.ItemContainer>
            </S.Wrapper>
        </Element>
    );
};