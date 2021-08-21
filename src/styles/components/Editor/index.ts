import styled from "styled-components";
interface ContainerProps {
  height: number;
  testKey: boolean;
}

interface ContentProps {
  landscape: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 70%;
  height ${(props) => props.testKey && "100vh"};  
  background: #353446;

  @media (max-width: 968px) {
    width: 100% !important;
  }


  //494850
  //292836

  .ace-monokai {
    background-color: #292836;
  }

  .ant-tabs-nav {
    width: 70%;

    @media (max-width: 968px) {
      width: 100px;
    }

    position: absolute;
    z-index: 100;
    background: #22202c;
  }

  .ant-tabs-nav-list {
    display: flex;
    height: 43px;

    .ant-tabs-tab {
      font-size: 14px;
      padding: 14px 20px;
      color: #66669f;
      background: #2d2b37;

      .ant-tabs-tab-btn {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          color: blue;
          margin-right: 5px;
        }
      }
    }

    .ant-tabs-tab-active {
      font-size: 14px;
      padding: 14px 20px;
      color: #fff;
      background: #353446;
    }
  }

  .ant-tabs-nav-operations {
    display: none;
  }

  .breadcrumb {
    color: #66669f;
    font-weight: 400;
    font-size: 14px;
    padding: 45px 20px 0px 20px;
    background: #2d2b37;
  }

  #editor {
    width: auto !important;
    height: ${(props) => props.height + "px"} !important;
    font-family: monospace !important;
    direction: ltr !important;
    text-align: left !important;
  }

  .ace_gutter,
  .ace_content {
    padding-top: 5px !important;
    background: #2d2b37 !important;
  }
`;

export const Content = styled.div`
  position: fixed;
  z-index: 100;
  top: 5%;

  padding: 0 10px;

  @media (max-width: 968px) {
    top: ${props => props.landscape ? '19%' : '8%'};
    padding: 0 5px;
  }

  margin-bottom: 0;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export const TabTestIcon = styled.div`
  display: flex;

  svg {
    color: purple !important;
    font-size: 15px;
  }
`;
