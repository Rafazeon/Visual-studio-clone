import styled from "styled-components";

export const Container = styled.div`
    overflow-y: scroll;
    height: ${props => props.height + "px"};
`;