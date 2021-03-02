import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ThemeContext } from 'styled-components';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { HomeLayout } from '../../../components/page-layouts';
import {
  Card,
  Col,
  FlexWrapper,
  Row,
  Wrapper,
} from '../../../components/layout-containers';
import { Fieldset } from '../../../components/forms';
import { Heading3, PageTitle } from '../../../components/typography';
import { DataTable, TaskListStyles } from '../../../components/tables';
import { useAuthContext } from '../../../components/contexts';
import { endpoints } from '../../../constants/endpoints';

const FilerManager = (props) => {
  const themeContext = useContext(ThemeContext);
  const authData = useAuthContext();
  const router = useRouter();
  const fetcher = (url) => authData.globalFetch(url, 'get');
  //const url = endpoints.admin.tasks.getTasks;
  //const { data: response, error } = useSWR(url, fetcher);

  const response = {'success': true, 'data': {}};
  if (!response)
    return <Loader color="#078dd3" height={30} type="Bars" width="100%" />;

  if (!(response.success && response.data)) {
    return <h1>Error fetching data</h1>;
  }

  let content = null;

  return (
    <HomeLayout headerMenu={authData.navMenus}>
      <Wrapper
        height="auto"
        className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm"
      >
        <Row>
          <Col span={8}>
            <PageTitle
              title="Lobbyist Manager"
              icon={<i className="icon-files" />}
            />
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Card
              bordered
              style={{
                backgroundColor: 'white',
                textAlign: 'left',
                justifyContent: 'start',
                padding: '0.5rem',
              }}
            >
              <div>
                <p>
                  {authData.userProfile && (
                    <>
                      This is a placeholder page.
                    </>
                  )}
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        <Row margin="2rem 0">
          <Col span={10}>
            <Fieldset padding=".5rem .5rem 0 .5rem">
              <legend>Lobbying Entities</legend>
              {content}
            </Fieldset>
          </Col>
        </Row>
      </Wrapper>
    </HomeLayout>
  );
};

export default FilerManager;
