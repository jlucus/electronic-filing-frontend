import React, { useState, useEffect, useRef, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { Dropdown, Menu, MenuItem } from "../menu";
import { Container, Col, Space } from "../layout-containers";
import AccessibilityModal from "../modals/AccessibilityModal";
import HyperLink from "../links/Link";
import { Nav, NavItem, NavbarToggler, SubNav, SubNavItem } from "../navbar";
import { useAuthContext } from "../contexts";
import { endpoints } from "../../constants/endpoints";
import { Input } from "../forms";
import { Button } from "../buttons";


const importBrowseAloud = process.env.NEXT_PUBLIC_EFILE_ENV !== "dev";

const TopWrapper = styled.div`
  background-color: ${(props) => props.theme.titleBgColor};
  height: 3.75rem;
  line-height: 3.75rem;
`;

const TopTextLink = styled(HyperLink)`
  margin-left: 1rem;
`;

const TopTextLinkLarge = styled(TopTextLink)`
  font-size: 30px;
`;

const LoginUserLink = styled(TopTextLink)`
  font-weight: 500;
  & > i {
    color: ${(props) => props.theme.linkTextColor};
    margin-right: 0.25rem;
  }
`;
const Splitter = styled.span`
  color: ${(props) => props.theme.titleColor};
  font-size: 1rem;
  padding: 0 0.5rem;
`;

const HeaderTitleWrapper = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  height: 6.25rem;

  @media screen and (max-width: 47.99em) {
    height: 3.4375rem;
    line-height: 3.4375rem;
  }
`;

const HeaderMobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 47.99em) {
    background-color: ${(props) => props.theme.mainBgColor};
    display: block;
    height: 5rem;
  }

  & .search-icon {
    font-size: 1.5rem;
    line-height: 4.5rem;
  }

  & .magnifier-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.titleColor};
  text-align: left;
  margin-left: 0.5rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 47.99em) {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-left: 0;
  }
  @media screen and (min-width: 48em) and (max-width: 74.99em) {
    font-size: 1.375rem;
  }
`;

const GradientWrapper = styled.div`
  height: 24.375rem;
  background-color: ${(props) =>
    props.theme.primaryColor}; /* For browsers that do not support gradients */
  background-image: linear-gradient(
    to left,
    ${(props) => props.theme.secondaryColor},
    ${(props) => props.theme.primaryColor}
  );
`;

const WidgetToolWrapper = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const GoogleWidget = styled.div``;

const SignoutLink = styled.a`
  font-size: ${(props) => props.fontSize || "0.875rem"};
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.mainBgColor};
  text-decoration: none;
  font-weight: bold;
  padding: 0.375rem 0.5rem;
  display: inline-flex;
  line-height: ${(props) => props.fontSize || "0.875rem"};
  border-radius: 3px;

  &:hover,
  &:visited {
    color: ${(props) => props.theme.primaryColor};
    text-decoration: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.lightButtonBgHoverColor};
  }
`;

const MainMenuWrapper = styled.div`
  background-color: ${(props) => props.theme.mainMenuBgColor};
  height: 3.75rem;
  clear: both;

  @media screen and (max-width: 47.99em) {
    height: 3.4375rem;
    line-height: 3.4375rem;
  }
  @media only screen and (max-width: 1199px)  {
    display: none;
  }
`;

const MainMenuContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;

const MainMenuList = styled.ul`
  list-style: none;
  float: left;
  text-align: left;
  margin: 0;
  padding: 0;
  line-height: 3.75rem;
`;
const MainMenuItem = styled.li`
  float: left;
  margin: 0;
  min-width: 8rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${(props) => props.theme.mainMenuBgColor};
  user-select: none;
  position: relative;

  border: none;
  border-left-width: 1px;
  border-left-style: solid;
  -webkit-border-image:
    -webkit-gradient(linear, 0 0, 0 100%, from(${(props) => props.theme.mainMenuSeparatorColor1}),
    to(${(props) => props.theme.mainMenuSeparatorColor2})) 1 100%;
  -webkit-border-image:
    -webkit-linear-gradient(${(props) => props.theme.mainMenuSeparatorColor1},
    ${(props) => props.theme.mainMenuSeparatorColor2}) 1 100%;
  -moz-border-image:
    -moz-linear-gradient(${(props) => props.theme.mainMenuSeparatorColor1},
    ${(props) => props.theme.mainMenuSeparatorColor2}) 1 100%;
  -o-border-image:
    -o-linear-gradient(${(props) => props.theme.mainMenuSeparatorColor1},
    ${(props) => props.theme.mainMenuSeparatorColor2}) 1 100%;
  border-image:
    linear-gradient(to bottom, ${(props) => props.theme.mainMenuSeparatorColor1},
    ${(props) => props.theme.mainMenuSeparatorColor2}) 1 100%;

  & > a {
    color: ${(props) => props.theme.mainMenuTextColor};
    user-select: none;
    margin: 0 0.5rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  & > a > i {
    color: ${(props) => props.theme.mainMenuSeparatorColor2};
    font-weight: bold;
    font-size: 1.25rem;
    margin-left: 0.5rem;
  }

  & > ul {
    display: none;
  }

  &:hover > ul {
    display: block;
  }

  &:hover {
    border: none;
  }

  &:hover, & > a:hover, &:hover > a, &:hover > a > i  {
    color: ${(props) => props.theme.mainMenuHoverTextColor};
    background-color: ${(props) => props.theme.mainMenuHoverBgColor};
    cursor: pointer;
  }
`;

const SubMenuList = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
  line-height: 2.1875rem;
  background-color: ${(props) => props.theme.mainMenuBgColor};
  border: 1px solid ${(props) => props.theme.subMenuBorderColor};
  border-top: none;
  position: absolute;
  z-index: 1;
`;
const SubMenuItem = styled.li`
  margin: 0;
  padding: 0 0.5rem;
  min-width: 8rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${(props) => props.theme.mainMenuBgColor};
  color : ${(props) => props.theme.mainMenuTextColor};
  user-select: none;
  border-bottom: 1px solid ${(props) => props.theme.subMenuItemBorderColor};
  z-index: 2;

  &:hover {
    background-color: ${(props) => props.theme.subMenuItemHoverBgColor};
  }
  & > a, & > a:hover, & > a:visited {
    color: ${(props) => props.theme.subMenuTextColor};
  }
`;

const MainMenuSearchWrapper = styled.div`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

function Header({ headerMenu = null, navbarOpened, setNavbarOpened }) {
  const themeContext = useContext(ThemeContext);

  const languageRef = React.useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const googleWidgetInitialized = useRef(false);
  const router = useRouter();

  const hasHeaderMenu = headerMenu != null;

  const authData = useAuthContext();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function onClickAccessibility() {
    toggleModal();
  }

  const googleTranslateElementInit = () => {
    console.log("translate inited", googleWidgetInitialized.current);
    if (!googleWidgetInitialized.current) {
      googleWidgetInitialized.current = true;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // setInitTranslate(true);
    }
  };

  const onClickSignOut = async() => {
    console.log("sign out");
    const resp = await authData.globalFetch(endpoints.auth.logout, "get");
    if (resp.success) {
      if (router.asPath === "/" || !router.asPath) {
        // if the current page is landing page, just reload the user
        await authData.getUser();
      }
      await router.push("/");
    }
  };

  const toggleLanguage = () => {
    if (languageRef.current) {
      languageRef.current.click();
    }
  };

  useEffect(() => {
    // if (window.googleTranslateElementInit) {
    window.googleTranslateElementInit = googleTranslateElementInit;
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    // }

    // hidden the audio assist tool at first
    function checkBrowsealoudAndDisable() {
      setTimeout(() => {
        console.log("checking browsealoud tool");
        if (document.getElementById("browsealoud-button--launchpad")) {
          // console.log('hide toolbar');
          // document.getElementById('browsealoud-button--launchpad').click();
          if (document.getElementById("__bs_entryDiv")) {
            const toolbar = document.getElementById("__bs_entryDiv");
            console.log("display toolbar value", toolbar.style.display);
            if (toolbar.style.display !== "none") {
              document.getElementById("browsealoud-button--launchpad").click();
            }
          } else {
            console.log("no toolbar");
          }
        } else {
          // console.log('not found');
          // checkBrowsealoudAndDisable();
        }
      }, 2000);
    }

    checkBrowsealoudAndDisable();

    if (importBrowseAloud) {
      checkBrowsealoudAndDisable();
    }
  }, []);

  const [collapseNavbarMenuKey, setCollapseNavbarMenuKey] = useState(null);

  function onNavbarMenuClicked(event, navbarMenu) {
    event.preventDefault();
    if (collapseNavbarMenuKey === navbarMenu.id) {
      setCollapseNavbarMenuKey(null);
    } else {
      setCollapseNavbarMenuKey(navbarMenu.id);
    }
  }

  return (
    <header>
      <AccessibilityModal isOpen={isOpen} toggleModal={toggleModal} />
      <TopWrapper className="hide-on-mobile">
        <Container className="l-padding-td l-padding-desktop-tn">
          <Col className="text-left" noGutter={true} span={6}>
            <TopTextLink href="/">Visit sandiego.gov</TopTextLink>
          </Col>
          <WidgetToolWrapper noGutter={true} span={6}>
            <div>
              <TopTextLink
                key="accessibility"
                href="#"
                onClick={onClickAccessibility}
              >
                Accessibility Tools
              </TopTextLink>
            </div>
            <GoogleWidget ref={languageRef} id="google_translate_element" />
          </WidgetToolWrapper>
        </Container>
      </TopWrapper>
      <HeaderMobileWrapper>
        <Container className="l-padding-td l-padding-desktop-tn l-padding-mobile-ts hide-on-desktop">
          <Col className="text-left" sm={6} span={6}>
            <a className="logo" href="/">
              <img
                alt="The City of San Diego"
                height="60"
                src="/img/logo-mark.png"
                width="70"
              />
            </a>
          </Col>
          <Col className="text-right" sm={6} span={6}>
            {authData.userProfile && (
              <Dropdown
                overlay={
                  <Menu>
                    <MenuItem key="1">
                      <HyperLink color={themeContext.textColor} href="#">
                        Logged In as {authData.userProfile.first_name}{" "}
                        {authData.userProfile.last_name}
                      </HyperLink>
                    </MenuItem>
                    <MenuItem key="2">
                      <HyperLink
                        color={themeContext.textColor}
                        href="#"
                        onClick={() => onClickSignOut()}
                      >
                        Logout
                      </HyperLink>
                    </MenuItem>
                  </Menu>
                }
              >
                <a className="magnifier-icon" href="#">
                  <i className="icon-user" />
                </a>
              </Dropdown>
            )}
            <a
              className="search-icon"
              href="#"
              onClick={() => toggleLanguage()}
            >
              <i className="icon-translate" />
            </a>
          </Col>
        </Container>
      </HeaderMobileWrapper>
      <HeaderTitleWrapper>
        <Container className="l-padding-td l-padding-desktop-tn l-padding-mobile-tn">
          <Col
            className="l-padding-desktop-ls l-padding-extra-ln hide-on-mobile l-padding-desktop-ts"
            noGutter={true}
            span={2}
          >
            <Space
              align="center"
              direction="vertical"
              style={ { maxWidth: 205, marginTop: 15 } }
            >
              <a className="logo" href="/">
                <img
                  alt="The City of San Diego"
                  className="hide-on-mobile"
                  height="50"
                  src="/img/logo.png"
                  width="205"
                />
              </a>
            </Space>
          </Col>
          <Col
            className="l-padding-desktop-rs l-padding-extra-rn l-padding-desktop-ll l-padding-mobile-ln"
            noGutter={true}
            sm={12}
            span={10}
          >
            <Space align="between" smAlign="center">
              <HeaderTitle>Electronic Filing System</HeaderTitle>
              <Space align="end" className="hide-on-mobile">
                {authData.userProfile && (
                  <>
                    <LoginUserLink href="#">
                      <i className="icon-user icon--circle background--white icon--xs" />
                      {authData.userProfile.first_name}{" "}
                      {authData.userProfile.last_name}
                    </LoginUserLink>
                    <Splitter>|</Splitter>
                    <SignoutLink href="#" onClick={() => onClickSignOut()}>
                      Sign Out
                    </SignoutLink>
                    <Splitter>|</Splitter>
                  </>
                )}
                <TopTextLinkLarge href="/">
                  <i className="icon-home" />
                </TopTextLinkLarge>
              </Space>
            </Space>
            {hasHeaderMenu && (
              <>
                <NavbarToggler
                  className="hide-on-desktop"
                  isOpen={navbarOpened}
                  onClick={() => setNavbarOpened(!navbarOpened)}
                />
                <Nav aria-label="main menu" className="hide-on-desktop" role="navigation" show={navbarOpened}>
                  {headerMenu.map((eachMenu, idx) => (
                    <NavItem
                      key={eachMenu.id}
                      role="none"
                      selected={eachMenu.selected}
                    >
                      {eachMenu.children ? (
                        <a
                          aria-expanded={eachMenu.id === collapseNavbarMenuKey ? "true" : "false"}
                          aria-haspopup={"true"}
                          href="#"
                          role="menuitem" tabIndex={idx} onClick={(event) => onNavbarMenuClicked(event, eachMenu)}
                        >
                          {eachMenu.title}
                          {(eachMenu.id === collapseNavbarMenuKey) ?
                            (<i className="icon-chevron-down" />) : (<i className="icon-chevron-up" />)}
                        </a>
                      ) : (
                        <Link href={eachMenu.link}>
                          <a aria-haspopup={"false"} role="menuitem" tabIndex={idx}>
                            {eachMenu.title}
                          </a>
                        </Link>
                      )}

                      {eachMenu.children && (eachMenu.id === collapseNavbarMenuKey) && (
                        <SubNav role="menu">
                          {eachMenu.children.map((eachChildMenu) => (
                            <SubNavItem key={eachChildMenu.key} role="none">
                              <Link href={eachChildMenu.link}>
                                <a aria-expanded="false" aria-haspopup="false" role="menuitem" 	tabIndex="-1">
                                  {eachChildMenu.title}
                                </a>
                              </Link>
                            </SubNavItem>
                          ))}
                        </SubNav>
                      )}
                    </NavItem>
                  ))}
                </Nav>
              </>
            )}
          </Col>
        </Container>
      </HeaderTitleWrapper>
      {hasHeaderMenu && (
        <MainMenuWrapper>
          <MainMenuContainer className="l-padding-td l-padding-desktop-tn l-padding-mobile-tn">
            <MainMenuList aria-label="main menu" role="navigation">
              {headerMenu.map((eachMenu, idx) => (
                <MainMenuItem key={eachMenu.id} role="none">
                  <Link href={eachMenu.link}>
                    <a aria-haspopup={!!eachMenu.children} role="menuitem" tabIndex={idx}>
                      {eachMenu.title} {eachMenu.children && <i className="icon-chevron-down" />}
                    </a>
                  </Link>
                  {eachMenu.children && (
                    <SubMenuList role="menu">
                      {eachMenu.children.map((eachChildMenu) => (
                        <SubMenuItem key={eachChildMenu.key} role="none">
                          <Link href={eachChildMenu.link}>
                            <a aria-expanded="false" aria-haspopup="false" role="menuitem" 	tabIndex="-1">
                              {eachChildMenu.title}
                            </a>
                          </Link>
                        </SubMenuItem>
                      ))}
                    </SubMenuList>
                  )}
                </MainMenuItem>
              ))}
            </MainMenuList>
            <MainMenuSearchWrapper>
              <Space>
                <Input placeholder="Filer Search" size="small" type="text" />
                <Button icon={<i className="icon-magnifier" />}></Button>
              </Space>
            </MainMenuSearchWrapper>
          </MainMenuContainer>
        </MainMenuWrapper>
      )}
      <GradientWrapper className="hide-on-mobile" />
    </header>
  );
}

export default Header;
