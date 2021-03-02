import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import BlockTitle from "../components/typography/BlockTitle";
import {
  Row,
  Col,
  BlockArticle,
  ContentWrapper,
  MainTitle,
  NoWrapSpan,
} from "../components/layout-containers";
import HomeLayout from "../components/page-layouts/HomeLayout";


const articlesPublic = [
  {
    title: "Access All Public Filing",
    texts: [
      "The City of San Diego provides unified access to all public filings, "
        + "including Statements of Economic Interest (SEI, Series 700 filings), "
        + "Lobbyist Disclosures (Series 600 filings), Campaign Disclosures "
        + "(Series 400 filings), and Gift Reports (Series 800 filings).",
      "Click on Access Filings here for searching for the City's entire "
        + "database or choose one of the specialized searches offered below.",
    ],
    button: {
      title: "Access Filings",
      link: "/public/search",
    },
  },
  {
    title: "Statements of Economic Interests (Series 700)",
    texts: [
      "The Political Reform Act (Gov. Code sections 81000-91014) requires"
        + " most state and local government officials and employees to publicly "
        + "disclose their personal assets and income. They also must disqualify "
        + "themselves from participating in decisions which may affect their"
        + " personal economic interests.",
      "Statements of Economic Interests are public documents. Any member "
        + "of the public may inspect and copy any statement.",
    ],
    button: {
      title: "Access Filings",
      link: "/",
    },
  },
  {
    title: "Lobbyist Disclosures (Series 600)",
    texts: [
      "Lobbyists wanting to influence City decisions must register and disclose "
        + "their clients and activities. Lobbyists include professional lobbying firms,"
        + " organization lobbyists, and expenditure lobbyists.",
      "Use the City's database to research lobbying disclosure information,"
        + " including information about individuals, clients, city officials and"
        + " candidates, municipal decision, city departments, ballot measures, and political committees.",
    ],
    button: {
      title: "Access Filings",
      link: "/",
    },
  },
  {
    title: "Lobbyist Disclosures (Series 800)",
    texts: [
      "Reports on Gift to Agency, Ceremonial Role Events, Ticket/Pass distributions,"
        + " Behest Payments, and Public Official Appointments.",
      "Use the City's database to research reports and disclosures made by City "
        + "officials on these activities.",
    ],
    button: {
      title: "Access Filings",
      link: "/",
    },
  },
];

const articlesFiler = [
  {
    title: "Quick Access for Registered Filers",
    texts: [
      "Click on Login to access your new unified Filer Portal.",
      "Not yet a registered filer? \nPlease review the information"
        + " below for the filing categories that apply to you. Contact"
        + " the City Clerk's Office via email at cityclerk@sandiego.gov "
        + "or call (619) 533-4000 (voice) or (619) 236-7012 (TT) for "
        + "assistance.\n\n",
    ],
    button: {
      title: "Login",
      link: "/auth/filer",
    },
  },
  {
    title: "Statements of Economic Interests (Series 700)",
    texts: [
      "Statements of Economic Interests must be filed electronically."
        + " Forms in alternative formats and accommodations for filing are"
        + " available upon request. Please call (619) 533-4000 (voice) or "
        + "(619) 236-7012 (TT) or email cityclerk@sandiego.gov for assistance "
        + "from City Clerk staff.",
      "Before you file, you must have received your login information "
        + "and filer identification number. Please contact the City Clerk's "
        + "Elections Team at (619) 533-4000.",
    ],
    button: null,
  },
  {
    title: "Campaign Disclosures (Series 400)",
    texts: [
      "Candidates and campaign committees must file disclosure reports "
        + "mandated by California's Political Reform Act. These reports "
        + "must be filed electronically.",
      "Before you file, you must have received your login information "
        + "and filer identification number. Please contact the City Clerk's"
        + " Elections Team at (619) 533-4000.",
    ],
    button: null,
  },
  {
    title: "Lobbyist Registration and Disclosures (Series 600)",
    texts: [
      "Lobbying firms, organizational lobbyists, and expenditure "
        + "lobbyists must register with the city and provide reports and "
        + "clients and activities as mandated by San Diego Municipal Code"
        + " &#167;27.4045(b). These filings must be made electronically "
        + "through the City's system.",
      "You can self-register for an account and once approved by City "
        + "Clerk staff, you can submit your registration and subsequent "
        + "required filings.",
    ],
    button: {
      title: "Get Started Now",
      link: "/register/lobbyist/register",
    },
  },
];

export default function Home() {
  const themeContext = useContext(ThemeContext);

  return (
    <HomeLayout footer={true}>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col className="text-center hide-on-mobile" span={2} />
          <Col className="text-center" sm={12} span={8}>
            <MainTitle>
              Welcome to the
              {" "}
              <NoWrapSpan>City of San Diego</NoWrapSpan>
              {" "}
              Electronic Filing System
            </MainTitle>
          </Col>
          <Col className="hide-on-mobile" span={2} />
        </Row>
        <Row>
          <Col sm={12} span={6}>
            <BlockTitle
              icon={<i className="icon-users2" />}
              iconBgColor={themeContext.primaryColor}
              title="Public Access"
            />
            {articlesPublic.map((eachArticle, idx) => (
              <BlockArticle
                key={idx}
                button={eachArticle.button}
                texts={eachArticle.texts}
                title={eachArticle.title}
              />
            ))}
          </Col>
          <Col sm={12} span={6}>
            <BlockTitle
              icon={<i className="icon-document2" />}
              iconBgColor={themeContext.secondaryColor}
              title="Filer Access"
            />
            {articlesFiler.map((eachArticle, idx) => (
              <BlockArticle
                key={idx}
                button={eachArticle.button}
                texts={eachArticle.texts}
                title={eachArticle.title}
              />
            ))}
          </Col>
        </Row>
      </ContentWrapper>
    </HomeLayout>
  );
}
