import React, { useEffect, useState } from "react";
import {
  VscSearch,
  VscFiles,
  VscAccount,
  VscSettingsGear,
  VscChevronDown,
  VscChevronRight,
  VscDebugAlt2,
  VscCaseSensitive,
} from "react-icons/vsc";
import { useMediaQuery } from "react-responsive";
import { Input } from "antd";
import _ from "lodash";
import { useEditorData } from "~/contexts/EditorContext";
import * as S from "~/styles/components/Sidebar";
import { arr } from "./menu";

function Sidebar() {
  const { component, handleComponent, handleTab, show, handleShow } =
    useEditorData();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 968px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 969px)" });

  const [title, setTitle] = useState("EXPLORER");
  const [open, setOpen] = useState({ root: true, [component.value]: true });
  const [selected, setSelected] = useState(component.title);
  const [search, setSearch] = useState("");
  const [menuList, setMenuList] = useState(arr);

  useEffect(() => {
    if (search) {
      findList();
    }
  }, [search]);

  const handleOpen = (value) => {
    setOpen({ ...open, [value]: true });
  };

  const handleClose = (value) => {
    setOpen({ ...open, [value]: false });
  };

  const handleTitle = (value: string) => {
    setTitle(value);
  };

  const handleSelected = (title, component) => {
    setSelected(title);
    handleComponent(component);
    handleShow("editor");
  };

  const handleFiles = () => {
    handleTitle("EXPLORER");
    handleShow("sidebar");
  };

  const handleSearch = (event) => {
    debouncedSearch(event.target.value);
  };

  const debouncedSearch = _.debounce((value) => {
    if (!value) {
      setMenuList(arr);
    }
    setSearch(value);
  }, 500);

  const findList = () => {
    arr.filter((item) => {
      const findTitleList = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const findItemList = item.data.filter((menu) => {
        if (menu.title.toLowerCase().includes(search.toLowerCase())) {
          return menu;
        }
      });

      if (findTitleList) {
        setMenuList([item]);
      }

      if (findItemList.length) {
        const newList = { ...item };
        newList.data = findItemList;
        setMenuList([newList]);
      }
    });
  };

  const SidebarContent = () => {
    return (
      <S.Content>
        <p className="explorer">{title}</p>
        {title === "SEARCH" && (
          <Input
            defaultValue={search}
            onChange={handleSearch}
            suffix={<VscCaseSensitive />}
          />
        )}
        {menuList.map((item, index) => (
          <div key={index}>
            <div className="title">
              <h1>
                {open[item.value] ? (
                  <VscChevronDown onClick={() => handleClose(item.value)} />
                ) : (
                  <VscChevronRight onClick={() => handleOpen(item.value)} />
                )}
                {item.title}
              </h1>
            </div>

            {open[item.value] &&
              item.data.map((row, index) => (
                <div key={index} className="main">
                  <p>
                    {open[row.value] ? (
                      <VscChevronDown onClick={() => handleClose(row.value)} />
                    ) : (
                      <VscChevronRight onClick={() => handleOpen(row.value)} />
                    )}
                    {row.title}
                  </p>

                  {open[row.value] &&
                    row.content.map((sub, index) => (
                      <S.Lines
                        selected={selected === sub.title}
                        onClick={() =>
                          handleSelected(sub.title, {
                            Icon: sub.Icon,
                            Component: sub.Component,
                            ComponentReview: sub.ComponentReview,
                            title: sub.title,
                            path: `${row.title} > ${sub.title}`,
                          })
                        }
                        key={index}
                        className="subItem"
                      >
                        <p>
                          {<sub.Icon />} {sub.title}
                        </p>
                      </S.Lines>
                    ))}
                </div>
              ))}
          </div>
        ))}
      </S.Content>
    );
  };

  return (
    <S.Container editor={show.editor}>
      <S.Navbar>
        <div className="navTop">
          <div className="navItem">
            <VscSearch onClick={() => handleTitle("SEARCH")} />
          </div>
          <div className="navItem">
            <VscFiles onClick={handleFiles} />
          </div>
          <div onClick={() => handleTab("2")} className="navItem">
            <VscDebugAlt2 />
          </div>
        </div>

        <div className="navBottom">
          <div className="navItem">
            <VscAccount />
          </div>

          <div className="navItem">
            <VscSettingsGear />
          </div>
        </div>
      </S.Navbar>

      {isDesktop && <SidebarContent />}
      {isTabletOrMobile && show.sidebar && <SidebarContent />}
    </S.Container>
  );
}

export default Sidebar;
