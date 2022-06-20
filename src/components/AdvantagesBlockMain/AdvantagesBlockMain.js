import React, { useState, useRef, useEffect } from "react";
import * as S from './styles';
import { H2, BodyL, ToolTip } from "***";
import pencilIcon1 from "./images/wallet-icon.png";
import pencilIcon2 from "./images/arrows-icon.png";
import pencilIcon3 from "./images/piggy-bank-icon.png";
import pencilIcon4 from "./images/cart-icon.png";
import pencilIcon5 from "./images/drop-icon.png";
import pencilIcon6 from "./images/basket-icon.png";


export const AdvantagesBlockMain = ({percentCashbackInternet, percentCashbackCommunal, percentCashbackPurchases}) => {
    const cRef = useRef(null);
    const sliderContent = [
        { icon: pencilIcon1, text: 'Бесплатный выпуск и\u00A0обслуживание\u00A0карты' },
        { icon: pencilIcon2, text: 'Бесплатные переводы на\u00A0карты\u00A0других\u00A0банков' },
        { icon: pencilIcon3, text: 'Пополнение вкладов быстро\u00A0и\u00A0без\u00A0комиссии' },
        { icon: pencilIcon4, text: `До ${percentCashbackInternet}% кешбэк на интернет-покупки` },
        { icon: pencilIcon5, text: `До ${percentCashbackCommunal}% кешбэк на оплату ЖКУ` },
        { icon: pencilIcon6, text: `${percentCashbackPurchases}% кешбэк на покупки` },
    ];


    const [state, setState] = useState({
        isDown: false,
        startX: 0,
        transLeftOffset: 0,
    });

    const handleMouseDown = (e) => {
        if (document.documentElement.clientWidth >= 1024) return;
        const carousel = cRef.current;
        if (e.type === "touchstart") {
            carousel.style.cssText = `
                overflow: auto;
            `;
        }
        e.persist();
        const _startX = e.pageX - carousel.offsetLeft;
        const _transLeftOffset = giveMeIntValOf(carousel.firstChild.style.transform);
        setState({
            isDown: true,
            startX: _startX,
            transLeftOffset: _transLeftOffset
        });

        carousel.firstChild.style.cssText = `
          transform: translateX(${_transLeftOffset}px);
          transition: transform 0.0s ease-in-out;
          cursor: -webkit-grabbing;
          cursor: grabbing;
        `;
    };

    const handleMouseLeave = (e) => {
        handleSnap();
    }

    const handleMouseUp = (e) => {
        handleSnap();
    }

    const handleMouseMove = (e) => {
        if (document.documentElement.clientWidth >= 1024) return;
        const carousel = cRef.current;
        const { isDown, startX, transLeftOffset } = state;
        if(!isDown) return
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = x - startX;
        carousel.firstChild.style.transform = `translateX(${
            transLeftOffset + walk
        }px)`;
    }


    const handleSnap = () => {
        if (document.documentElement.clientWidth >= 1024) return;
        const carousel = cRef.current;
        setState({
            ...state,
            isDown: false
        });

        const tempThresholdOffset = giveMeIntValOf(carousel.firstChild.style.transform);
        const itemWidth = 384;
        const itemSideOffsetsRight = 24;
        const carouselPadding = 40;
        const end = -(sliderContent.length * itemWidth + itemSideOffsetsRight * (sliderContent.length - 1) + 2 * carouselPadding - carousel.offsetWidth);

        if (tempThresholdOffset > 0 || tempThresholdOffset < end) {
            setState({
                ...state,
                isDown: false
            });
            carousel.firstChild.style.cssText = `
                transform: translateX(${ tempThresholdOffset > 0 ? 0 : end}px);
                transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
            `;
        } else {
            carousel.firstChild.style.cssText = `
                transform: translateX(${ tempThresholdOffset }px);
                transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
                cursor: default;
            `;
        }
    };

    const giveMeIntValOf = (el) => {
        return parseInt(el.replace('translateX(', '').replace('px)',''), 10);
    };

    return (
        <S.Wrapper>
            <S.Header><H2>Преимущества карты «My&nbsp;Life»</H2></S.Header>
            <S.Carousel
                ref={cRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleMouseDown}
            >
                <S.ItemsWrapper
                    style={{transform: 'translateX(0px)'}}
                >
                    {sliderContent.map((data, i) => (
                        <S.Item key={i}>
                            <S.Icon src={data.icon}/>
                            <S.Text>
                                <BodyL>{data.text}
                                    {i === 3 &&
                                    <ToolTip textPosition={'top'} width={"200px"}>
                                        При условии подключённой <a
                                        href="https://www.ubrr.ru/chastnym-klientam/vklady/opciya-bolshe-plyusov?from_medium=lp_dnm"
                                        target='_blank'
                                        style={{color: '#8C8C8C'}}
                                    >опции «Больше плюсов</a>»</ToolTip>}
                                </BodyL>
                            </S.Text>
                        </S.Item>
                    ))}
                </S.ItemsWrapper>
            </S.Carousel>
        </S.Wrapper>
    );
};