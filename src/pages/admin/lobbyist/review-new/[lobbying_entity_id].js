import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { HomeLayout } from '../../../../components/page-layouts';
import {
  Wrapper,
  Row,
  Col,
  FlexWrapper,
} from '../../../../components/layout-containers';
import { PageTitle, Span, Subheading } from '../../../../components/typography';
import { LobbyistReviewForm, Fieldset } from '../../../../components/forms';
import { DataTable } from '../../../../components/tables';
import { Button } from '../../../../components/buttons';
import { useAuthContext } from '../../../../components/contexts';
import { endpoints } from '../../../../constants/endpoints';

function ReviewLobbyingEntityPage() {
  const authData = useAuthContext();
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [actionSuccessMessage, setActionSuccessMessage] = useState(null);
  const router = useRouter();
  const { lobbying_entity_id, task_ref } = router.query;

  useEffect(() => {
    const getData = async () => {
      const url = endpoints.admin.lobbyist.getLobbyist + lobbying_entity_id;
      const response = await authData.globalFetch(url, 'get');
      if (response.success) {
        setData(response.data);
      } else {
        setFetchFailed(true);
        setErrorMessage(
          'A server error occurred. Please try again later and contact efilesd-support@pasaconsult.com if the error persists.'
        );
      }
    };

    getData();
  }, []);

  const onAction = async (action) => {
    const url = endpoints.admin.lobbyist.reviewNewLobbyist + lobbying_entity_id;
    console.log(url);
    const body = {
      lobbying_entity_id,
      task_ref,
      action,
    };

    console.log(body);

    const response = await authData.globalFetch(url, 'post', body);
    if (response.success) {
      setActionSuccessMessage(
        `The Lobbyist was ${
          action === 'activate' ? 'approved' : 'rejected'
        }. Thank you.`
      );
    } else {
      setErrorMessage(
        'A server error occurred. Please try again later and contact efilesd-support@pasaconsult.com if the error persists.'
      );
    }
  };

  const renderButtons = () => {
    const { reviewed } = data;
    if (reviewed) {
      return (
        <Button size="large" onClick={() => Router.push('/')}>
          Home
        </Button>
      );
    }
    return (
      <>
        <Button
          size="large"
          color="secondary"
          onClick={() => onAction('reject')}
        >
          Reject
        </Button>
        <Button size="large" onClick={() => onAction('activate')}>
          Approve
        </Button>
      </>
    );
  };

  if (fetchFailed) {
    return (
      <HomeLayout headerMenu={authData.navMenus} tabMenu={authData.tabMenus}>
        <Wrapper height="auto">
          {' '}
          <Row padding="0 0 1.5rem 0">
            <Col span={12}>
              <PageTitle
                title="Review New Lobbyist Registration"
                icon={<i className="icon-user" />}
              />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Subheading fontWeight="bold">{errorMessage}</Subheading>
            </Col>
          </Row>
          <Row padding="3rem 0">
            <Col span={12}>
              <Button
                size="large"
                onClick={() => Router.push('/admin/dashboard')}
              >
                Home
              </Button>
            </Col>
          </Row>
        </Wrapper>
      </HomeLayout>
    );
  }

  if (!data) return null;

  if (actionSuccessMessage) {
    return (
      <HomeLayout>
        <Wrapper height="auto">
          {' '}
          <Row padding="0 0 1.5rem 0">
            <Col span={12}>
              <PageTitle
                title="Review New Lobbyist Registration"
                icon={<i className="icon-user" />}
              />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Subheading fontWeight="bold">{actionSuccessMessage}</Subheading>
            </Col>
          </Row>
          <Row padding="3rem 0">
            <Col span={12}>
              <Button
                size="large"
                onClick={() => Router.push('/admin/dashboard')}
              >
                Home
              </Button>
            </Col>
          </Row>
        </Wrapper>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <Wrapper height="auto">
        {' '}
        <Row padding="0 0 1.5rem 0">
          <Col span={12}>
            <PageTitle
              title="Review New Lobbyist Registration"
              icon={<i className="icon-user" />}
            />
          </Col>
        </Row>
        <Row margin="1rem 0">
          <Col span={10}>
            <LobbyistReviewForm
              rawData={data}
              setErrorMessage={setErrorMessage}
            />
          </Col>
        </Row>
        <Row padding="1rem 0">
          <Col span={10}>
            <Fieldset padding=".5rem .5rem 0 .5rem">
              <legend>Filers associated with this entity</legend>
              <DataTable
                data={data.filer_users}
                headers={['First Name', 'Last Name', 'Email']}
                accessors={['first_name', 'last_name', 'email']}
              />
            </Fieldset>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Span>{errorMessage}</Span>
          </Col>
        </Row>
        <Row padding="1rem 0">
          <Col span={10}>
            <FlexWrapper justifyContent="flex-end">
              {renderButtons()}
            </FlexWrapper>
          </Col>
        </Row>
      </Wrapper>
    </HomeLayout>
  );
}

export default ReviewLobbyingEntityPage;
