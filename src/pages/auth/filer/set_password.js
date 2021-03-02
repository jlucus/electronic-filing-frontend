import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import { HomeLayout } from '../../../components/page-layouts';
import { Col, Row, Wrapper } from '../../../components/layout-containers';
import { ErrorMessage, NoteMessage, PageTitle, Span } from '../../../components/typography';
import { Fieldset, Input, Label } from '../../../components/forms';
import { Button } from '../../../components/buttons';
import { HelpBox, HelpParagraph } from '../../../components/info-boxes';
import { filerPasswordValidate } from '../../../utils/validator/filer';
import { endpoints } from '../../../constants/endpoints';
import { useAuthContext } from '../../../components/contexts';

const SetPasswordPage = ({ errorCode, errorMessage, token }) => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    formState: { isSubmitting },
  } = useForm({
    mode: 'all',
  });

  const [formErrorMessage, setFormErrorMessage] = useState(null);
  const [captchaGood, setCaptchaGood] = useState(false);

  const recaptchaRef = useRef();
  const router = useRouter();
  const authData = useAuthContext();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (info) => {
    const url = endpoints.auth.resetPassword;
    const data = {
      password: info.password,
      token,
    };

    const response = await authData.noAuthFetch(url, 'post', data);
    if (response.success) {
      await router.push('/auth/filer/local');
    } else {
      if (response.detail) {
        setFormErrorMessage(response.detail);
      } else {
        setFormErrorMessage(
          'A server error occurred. Please try again later and contact efile-sd-support@pasaconsult.com if the error persists.',
        );
      }
      recaptchaRef.current.reset();
    }
  };

  if (errorCode) {
    return (
      <HomeLayout>
        <Wrapper height="auto">
          <Row padding="0 0 1.5rem 0">
            <ErrorMessage style={{ fontSize: '2rem' }}>{errorMessage}</ErrorMessage>
          </Row>
        </Wrapper>
      </HomeLayout>
    );
  }
  return (
    <HomeLayout>
      <Wrapper height="auto">
        <Row padding="0 0 1.5rem 0">
          <Col span={12}>
            <PageTitle
              title="Reset Password"
              icon={<i className="icon-clipboard-user"/>}
            />
          </Col>
        </Row>
        <Row>
          <Col span={9}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Fieldset>
                <legend>Reset Password</legend>
                <Row>
                  <Col span={8} sm={12}>
                    <Row>
                      <Col span={12}>
                        <NoteMessage>
                          Please enter a strong password. It must be
                          at least 16 characters, and must contain upper case and lower case letters,
                          at least one number, and at least one special character.
                        </NoteMessage>
                      </Col>
                      <Col span={12}>
                        <Label>
                          New Password
                          {' '}
                          <Span>*</Span>
                        </Label>
                        <Input
                          type="password"
                          ref={register({
                            validate: (value) => filerPasswordValidate(value),
                          })}
                          name="password"
                          placeholder="New Password"
                        />
                        {errors.password && (
                          <>
                            {errors.password.message.split('\n').map((msg, idx) => <Span key={idx}>{msg}</Span>)}
                          </>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Label>
                          Confirm Password
                          {' '}
                          <Span>*</Span>
                        </Label>
                        <Input
                          type="password"
                          ref={register({
                            validate: (value) => value === password.current || 'The passwords do not match',
                          })}
                          name="confirm_password"
                          placeholder="Confirm Password"
                        />
                        {errors.confirm_password && (
                          <Span>{errors.confirm_password.message}</Span>
                        )}
                      </Col>
                    </Row>
                    <Row padding=".75rem .3rem">
                      <Col>
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                          onChange={() => {
                            setCaptchaGood(!captchaGood);
                          }}
                        />
                      </Col>
                    </Row>
                    {formErrorMessage && (
                      <Row padding=".9rem 0">
                        <Col span={10}>
                          <Span>{formErrorMessage}</Span>
                        </Col>
                      </Row>
                    )}
                    <Row padding=".3rem">
                      <Col>
                        <Button size="large" htmlType="submit" loading={isSubmitting}>
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={4} sm={12}>
                    <HelpBox title="Need Help">
                      <HelpParagraph>
                        <strong>Contact the City Clerk's Office:</strong>
                      </HelpParagraph>
                      <HelpParagraph>
                        <strong>Email</strong>
                        {' '}
                        cityclerk@sandiego.gov
                      </HelpParagraph>
                      <HelpParagraph>
                        <strong>Call</strong>
                        {' '}
                        (619) 533-4000 (voice) or
                      </HelpParagraph>
                      <HelpParagraph>
                        (619) 236-7012(TT) for assistance
                      </HelpParagraph>
                    </HelpBox>
                  </Col>
                </Row>
              </Fieldset>
            </form>
          </Col>
        </Row>
      </Wrapper>
    </HomeLayout>
  );
};

export const getServerSideProps = async (context) => {
  // if the token param is missing, show 404 page
  if (!context.query.token) {
    return {
      props: {
        errorCode: 404,
        errorMessage: 'Token is missing',
      },
    };
  }

  return {
    props: {
      token: context.query.token,
    },
  };
};

export default SetPasswordPage;
