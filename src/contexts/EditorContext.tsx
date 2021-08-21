import React, { ReactNode, useContext, createContext, useState } from "react";

import { arr } from "~/components/Sidebar/menu";

export const EditorContext = createContext({} as EditorContextProps);

interface EditorContextProps {
  component?: ComponentProps;
  tab?: string;
  show: { sidebar: boolean, editor: boolean };
  handleComponent?: ({}: ComponentProps) => void;
  handleTab?: (value: string) => void;
  handleShow?: (name: string) => void;
}
interface ComponentProps {
  Component: string;
  ComponentReview: any;
  Icon: any;
  title: string;
  path: string;
  value?: string;
}

const initialMenu = arr[0].data[0]
const initialSubMenu = arr[0].data[0].content[0];

const initialPath = `${initialMenu.title} > ${initialSubMenu.title}`;

const initialComponent: ComponentProps = {
  Component: initialSubMenu.Component,
  ComponentReview: initialSubMenu.ComponentReview,
  Icon: initialSubMenu.Icon,
  title: initialSubMenu.title,
  path: initialPath,
  value: initialMenu.value
};

export function EditorProvider({ children }: { children: ReactNode }) {
  const [component, setComponent] = useState(initialComponent);
  const [tab, setTab] = useState("1");
  const [show, setShow] = useState({ sidebar: true, editor: false })

  const handleComponent = (value: ComponentProps) => {
    setComponent(value);
  };

  const handleTab = (value: string) => {
    setTab(value)
  }

  const handleShow = (name: string) => {
    if(name === "editor") {
      return setShow({sidebar: false, editor: true})
    }

    return setShow({sidebar: true, editor: false})
  }

  return (
    <EditorContext.Provider
      value={{
        component,
        tab,
        show,
        handleComponent,
        handleTab,
        handleShow
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditorData(): EditorContextProps {
  const context = useContext(EditorContext);
  return context;
}
