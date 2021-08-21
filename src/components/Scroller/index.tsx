import React, { ReactNode } from "react";
import * as S from "~/styles/components/Scroller"

interface ScrollerProps {
    children: ReactNode,
    height: number;
}

function Scroller({ children, height }: ScrollerProps) {
    return (
        <S.Container height={height}>
            {children}
        </S.Container>
    )
}

export default Scroller