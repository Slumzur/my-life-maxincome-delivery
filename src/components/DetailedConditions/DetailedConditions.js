import React, { useState } from "react";
import * as S from './styles';
import { H2, H5, ToolTip, BodyL } from "***";
import { InfTable } from '../InfTable/InfTable';

export const DetailedConditions = ({
                                       maxIncomePercent,
                                       maxIncomeMinTime,
                                       maxIncomeMiddleTime,
                                       maxIncomeMaxTime,
                                       maxIncomeInterestPayment,
                                       maxIncomeRefill,
                                       maxIncomeDate1,
                                       maxIncomeBonusPercent,
                                       maxIncomeDate2,
                                       myLifeDate,
                                       percentCashbackInternet,
                                       percentCashbackCommunal,
                                       percentCashbackPurchases
}) => {
    const [activeTab, setActiveTab] = useState([
        true,
        false,
    ]);

    const ulList = (header, ...lines) => {
        return (
            <>
                <S.UlListHeader><H5>{header}</H5></S.UlListHeader>
                <S.UlList>
                    {lines.map((item, i) =>
                        <S.UlListItem key={i}>{item}</S.UlListItem>
                    )}
                </S.UlList>
            </>
        )
    }

    const textWithToolTipBlock = (text, toolTipContent, position) => {
        return (
            <>
                <S.BlockWithTooltip>
                    <S.TextWithToolTip>{text} <ToolTip textPosition={position} width={"180px"}><div dangerouslySetInnerHTML={{ __html: toolTipContent }}/></ToolTip></S.TextWithToolTip>
                </S.BlockWithTooltip>
            </>
        )
    }

    const tableContent = [
        [
            { header: 'Кто может открыть вклад', text: textWithToolTipBlock('новые клиенты', `Новые клиенты – физические лица, не имевшие в ПАО КБ «УБРиР» договор срочного вклада, Накопительного счёта «Промо» или Накопительного счёта, действующий на ${maxIncomeDate1}`, 'bottom') },
            { header: 'Годовая ставка', text: textWithToolTipBlock(`${maxIncomePercent} годовых`, `Максимальная доходность с учётом капитализации и бонусной ставки ${maxIncomeBonusPercent} за совершение покупок по картам УБРиР, с подключенной <a href="https://www.ubrr.ru/chastnym-klientam/vklady/opciya-bolshe-plyusov?from_medium=lp_dnm" target="_blank" style="color: #8C8C8C">опцией «Больше плюсов</a>»`, 'bottom') },
            { header: 'Срок вклада', text: ulList('',`${maxIncomeMinTime};`,`${maxIncomeMiddleTime};`, `${maxIncomeMaxTime}.`) },
            { header: 'Минимальная сумма открытия', text: 'от 1000 ₽' },
            { header: 'Способ выплаты процентов', text: ulList('по выбору клиента:', 'зачисление на счёт вклада;', 'перечисление на карточный счёт.') },
            { header: 'Выплата процентов', text: `${maxIncomeInterestPayment}` },
            { header: 'Пополнение', text: `${maxIncomeRefill}` },
            { header: 'Снятие', text: 'в пределах начисленных процентов без ограничений' },
            { header: 'Условия досрочного расторжения', text: 'производится пересчёт начисленных процентов по ставке 0,1% годовых за\u00A0весь срок нахождения средств на\u00A0вкладе. Проценты, выплаченные ранее, изымаются' },
            { header: 'Пролонгация', text: 'на срок вклада' },
        ],
        [
            { header: 'Стоимость обслуживания карты', text: 'Бесплатно' },
            { header: 'Снятие наличных в банкоматах', text: textWithToolTipBlock(`Бесплатно`, 'При оборотах по карте от 5\u00A0000\u00A0₽ в месяц', 'bottom') },
            { header: 'Кешбэк', text: ulList('',
                    textWithToolTipBlock(`${percentCashbackInternet}% на онлайн покупки;`, `При условии подключённой <a href="https://www.ubrr.ru/chastnym-klientam/vklady/opciya-bolshe-plyusov?from_medium=lp_dnm" target="_blank" style="color: #8C8C8C">опции «Больше плюсов</a>» и обороте по карте от 5\u00A0000\u00A0₽ в месяц. Максимальная выгода в месяц - 1\u00A0000\u00A0₽, но не более 5\u00A0000\u00A0₽ по всем категориям кешбэка`, 'diagonalRight'),
                    textWithToolTipBlock(`${percentCashbackCommunal}% на оплату ЖКУ;`, `При оборотах по карте от 5\u00A0000\u00A0₽ в месяц. Максимальная выгода в месяц - 500\u00A0₽, но не более 5\u00A0000 ₽ по всем категориям кешбэка`, 'diagonalRight'),
                    textWithToolTipBlock(`${percentCashbackPurchases}% на все покупки.`, `При оборотах по карте от 5\u00A0000\u00A0₽ в месяц. Максимальная выгода в месяц – 5\u00A0000 ₽, но не более 5\u00A0000 ₽ по всем категориям кешбэка`, 'diagonalRight'))
            },
            { header: 'Сервисы', text: ulList('',
                    textWithToolTipBlock('переводы по номеру телефона через СБП — бесплатно;', 'Лимит переводов через систему быстрых платежей в месяц до 100\u00A0000\u00A0₽', 'top'),
                    'оплата ЖКУ по QR-коду — бесплатно;',
                    'PUSH-информирование по операциям по карте — бесплатно;',
                    'SMS-информирование по операциям по карте — 99 ₽.')
            }
        ]
    ];

    const handleClick = (num) => {
        setActiveTab([
            num === 1,
            num === 2,
        ]);
    };

    return (
        <S.Wrapper>
            <S.Header><H2>Подробные условия</H2></S.Header>
            <S.Carousel>
                <S.CarouselItem active={activeTab[0]} onClick={() => handleClick(1)}><H5>Условия по вкладу</H5></S.CarouselItem>
                <S.CarouselItem active={activeTab[1]} onClick={() => handleClick(2)}><H5>Условия по карте «My Life»</H5></S.CarouselItem>
            </S.Carousel>
            {tableContent.map((item, i) =>
                <InfTable
                    key={i}
                    active={activeTab[i]}
                    content={item}
                />
            )}
            <BodyL>Условия действительны на {activeTab[0] ? maxIncomeDate2 : myLifeDate}</BodyL>
        </S.Wrapper>
    );
};