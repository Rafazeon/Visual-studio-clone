import React from "react";
import AceEditor from "react-ace";
import { useMediaQuery } from "react-responsive";
import { Tabs } from "antd";
import useWindowOrientation from "use-window-orientation";
import * as S from "~/styles/components/Editor";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import { useEditorData } from "~/contexts/EditorContext";

import { RiTestTubeFill } from "react-icons/ri";

import Sidebar from "~/components/Sidebar";

const { TabPane } = Tabs;

function Editor() {
  const { component, tab, handleTab, show } = useEditorData();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 968px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 969px)" });
  const { landscape } = useWindowOrientation();

  const onChange = (newValue) => {
    console.log("change", newValue);
  };

  const tabComponentValue = (
    <>
      <component.Icon />
      {component.title}
    </>
  );

  const tabTestValue = (
    <S.TabTestIcon>
      <RiTestTubeFill />
      Test
    </S.TabTestIcon>
  );

  const EditorContent = () => {
    return (
      <S.Container height={window.innerHeight - 78} testKey={tab === "2"}>
        <Tabs activeKey={tab} onChange={handleTab}>
          <TabPane tab={tabComponentValue} key="1">
            <p className="breadcrumb">{component.path}</p>

            <AceEditor
              value={component.Component}
              mode="javascript"
              theme="monokai"
              onChange={onChange}
              name="editor"
              editorProps={{ $blockScrolling: true }}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              readOnly={isTabletOrMobile}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          </TabPane>

          <TabPane tab={tabTestValue} key="2">
            <S.Content landscape={landscape}>
              {component.ComponentReview && <component.ComponentReview />}
            </S.Content>
          </TabPane>
        </Tabs>
      </S.Container>
    );
  };

  return (
    <>
      <Sidebar />
      {isDesktop && <EditorContent />}
      {isTabletOrMobile && show.editor && <EditorContent />}
    </>
  );
}

export default Editor;
