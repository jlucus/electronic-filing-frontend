import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { HomeLayout } from '../../../components/page-layouts';
import { Row, Col, ContentWrapper } from '../../../components/layout-containers';
import { PageTitle } from '../../../components/typography';

const adminLoginSamlSuccess = ({ token }) => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(function () {
      // after 2 seconds
      router.push('/admin/dashboard');
    }, 2000)

  }, []);

  return (
    <HomeLayout>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col span={12}>
            <PageTitle title='Okta Login succeeded: You are being redirected....' icon={<i className="icon-lock" />} />
          </Col>
        </Row>
      </ContentWrapper>
    </HomeLayout>
  );

};

export const getServerSideProps = async (context) => {
  return {
    props: {
      token: context.query.token,
    },
  };
};

export default adminLoginSamlSuccess;

