import styled from "styled-components";
interface ContainerProps {
  editor?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  @media (min-width: 969px) {
    width: 30%;
  }

  @media (max-width: 968px) {
    width: ${(props) => !props.editor && "100%"};
  }
`;

export const Navbar = styled.div`
  padding: 0 12px;
  background: #353446;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .navTop,
  .navBottom {
    text-align: center;
  }

  .navItem {
    color: #fff;
    margin-bottom: 10px;
    cursor: pointer;

    svg {
      font-size: 26px;
      margin-top: 15px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #22202c;

  input {
    width: 100%;
    color: #fff;
    padding: 5px;
    outline: none;
    background: #292836;
    border: 1px solid #6668a6;
  }

  .ant-input-suffix {
    position: absolute !important;
    top: 4.8% !important;

    @media (min-width: 969px) {
      left: 28% !important;
    }

    @media (max-width: 968px) {
      right: 1% !important;
      top: 6.8% !important;
    }

    svg {
      color: #fff;
    }
  }

  .explorer {
    color: #fff;
    font-size: 11px;
    font-weight: 400;
    padding: 15px;
  }

  .title {
    h1 {
      color: #fff;
      font-size: 11px;
      padding: 5px 0;
      background: #353446;
      display: flex;
      align-items: center;

      svg {
        font-size: 17px;
        margin-bottom: 2px;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }

  .main {
    p {
      color: #fff;
      font-size: 13px;
      padding: 5px 20px;
      display: flex;
      align-items: center;

      svg {
        font-size: 17px;
        margin-bottom: 2px;
        margin-right: 5px;
        cursor: pointer;
      }
    }

    .subItem {
      p {
        padding: 5px 30px;
        cursor: pointer;

        svg {
          color: blue;
        }
      }
    }
  }
`;

export const Lines = styled.div`
  background: ${(props) => props.selected && "#46445b"};
`;
