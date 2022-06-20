import React from "react";
import * as S from './styles';
import { BodyL } from "***";

export const InfTable = ({active, content}) => {
    return (
        <S.Wrapper active={active}>
            {content.map((item, i) =>
                <S.Item key={i}>
                    <S.Header><BodyL>{item.header}</BodyL></S.Header>
                    <S.DashLine/>
                    <BodyL>{item.text}</BodyL>
                </S.Item>
            )}
        </S.Wrapper>
    );
};

