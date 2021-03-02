import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { HomeLayout } from "../../components/page-layouts";
import { Card, Col, ContentWrapper, FlexWrapper, ProfileRow, Row, Space } from "../../components/layout-containers";
import { ErrorMessage, NoteMessage, PageTitle, Span } from "../../components/typography";
import { useAuthContext } from "../../components/contexts";
import { Checkbox, CustomInput, Label, ProfileFieldset, Select, StateOptions } from "../../components/forms";
import { Button } from "../../components/buttons";
import { Avatar } from "../../components/icons";
import { DataTable } from "../../components/tables";
import { endpoints } from "../../constants/endpoints";
import { capitalize } from "../../utils/strings";
import FilerProfileBox from "../../components/info-boxes/FilerProfileBox";


const FilerPage = (props) => {
  const authData = useAuthContext();

  const { register, handleSubmit, errors } = useForm();

  const [filerInfo, setFilerInfo] = useState(null);
  const [editing, setEditing] = useState(false);
  const [hasPermissionEdit, setHasPermissionEdit] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProfile = async() => {
    const url = endpoints.filer.profile.info;
    const resp = await authData.globalFetch(url, "get");

    if (resp.success) {
      setFilerInfo(resp.data);
      // check has permission for changeable profile
      if (resp.data.filer_types) {
        const cannotUpdate = resp.data.filer_types.some((filerType) =>
          filerType.key === "campaign" || filerType.key === "candidate");
        setHasPermissionEdit(!cannotUpdate);
      }
    } else {
      // show error
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!authData.userProfile) {
    return null;
  }

  const onSubmit = async(data) => {
    //
    setErrorMessage("");

    const url = endpoints.filer.profile.updateContact;
    const response = await authData.globalFetch(url, "PUT", data);
    if (response.success) {
      setEditing(false);
      setErrorMessage("");
      await fetchProfile();
    } else {
      setErrorMessage(
        "A server error occurred. Please try again later and contact efilesd-support@pasaconsult.com if the error persists.",
      );
    }
  };

  function onClickEdit() {
    // router.push('/filer/profile/edit');
    setEditing(true);
  }

  const taskContent = (
    <DataTable
      accessors={["link", "desc", "due", "created"]}
      color="robin"
      data={[
        { desc: "New Lobbyist Review: Acme Lobbying Inc.", due: "01/21/2021", created: "01/21/2021", link: "/abc" },
      ]}
      headers={["link", "Description", "Due", "Created at"]}
    />
  );

  const filingEntityContent = (
    <DataTable
      accessors={["link", "entity", "type", "role", "status"]}
      color="blue"
      data={[
        { entity: "Acme Lobbying Inc.", type: "Lobbying Firm", role: "N/A", status: "active", link: "/abc" },
        { entity: "City of San Diego.", type: "Government", role: "Consultant", status: "active", link: "/abc" },
      ]}
      headers={["link", "Entity/Org", "Type", "Role", "Status"]}
    />
  );

  const associatedEntityContent = (
    <DataTable
      accessors={["agency", "department", "position", "active"]}
      color="blue"
      data={[
        {
          agency: "Acme Lobbying Inc.",
          department: "Lobbying Firm",
          position: "N/A",
          active: "Active",
        },
      ]}
      headers={["Agency", "Department", "Position", "Active"]}
    />
  );

  return (
    <HomeLayout headerMenu={authData.navMenus} tabMenu={authData.tabMenus}>
      <ContentWrapper className="l-padding-hd l-padding-desktop-td l-padding-desktop-bm">
        <Row>
          <Col span={8}>
            <PageTitle
              icon={<i className="icon-screen" />}
              title="Filer Profile"
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Card
              bordered={true}
              style={ {
                backgroundColor: "white",
                textAlign: "left",
                justifyContent: "start",
                padding: "0.5rem",
                marginTop: "1rem",
              } }
            >
              You are logged in as
              {" "}
              {authData.userProfile.first_name}
              {" "}
              {authData.userProfile.last_name}
              {" "}
              (
              {capitalize(authData.userProfile.account_type)}
              ).
            </Card>
          </Col>
        </Row>
        <ProfileRow>
          <Col span={8}>
            {filerInfo && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <ProfileFieldset>
                  <legend>Filer Info</legend>
                  {hasPermissionEdit && (
                    <Row>
                      <Col span={12}>
                        <Space align="end">
                          {editing && (
                            <Button
                              htmlType="submit"
                              size="small"
                              onClick={() => onClickEdit()}
                            >
                              <div style={ { width: 50 } }>Save</div>
                            </Button>
                          )}
                          {!editing && (
                            <Button
                              rightIcon={(
                                <Avatar size="tiny">
                                  <i className="icon-pencil" />
                                </Avatar>
                              )}
                              size="small"
                              onClick={() => onClickEdit()}
                            >
                              <div style={ { width: 50 } }>Edit</div>
                            </Button>
                          )}
                        </Space>
                      </Col>
                    </Row>
                  )}
                  {!editing && (
                    <Row>
                      <Col sm={12} span={12}>
                        <FilerProfileBox profile={filerInfo} />
                      </Col>
                    </Row>
                  )}
                  {errorMessage && (
                    <Row>
                      <Col span={12}>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                      </Col>
                    </Row>
                  )}
                  <Row>
                    <Col span={12}>
                      {hasPermissionEdit ? (
                        <NoteMessage color="black">
                          We recommend that you use a business address and phone number for your contact information.
                        </NoteMessage>
                      ) : (
                        <ErrorMessage>
                          Please contact the City Clerk’s Office if you need to make changes to your contact
                          information.
                        </ErrorMessage>
                      )}
                    </Col>
                  </Row>
                  {editing && (
                    <>
                      <Row>
                        <Col sm={12} span={4}>
                          <CustomInput
                            defaultValue={filerInfo.contact_info.first_name}
                            disabled={!editing}
                            editing={editing}
                            errorMessage={errors?.first_name?.message}
                            id="first_name"
                            innerRef={register({
                              required: "First Name is required.",
                              minLength: {
                                value: 2,
                                message: "First Name must have 2 or more characters.",
                              },
                            })}
                            invalid={!!errors.first_name}
                            label="First Name"
                            name="first_name"
                            required={true}
                          />
                        </Col>
                        <Col sm={12} span={4}>
                          <CustomInput
                            defaultValue={filerInfo.contact_info.middle_name}
                            disabled={!editing}
                            editing={editing}
                            id="middle_name"
                            innerRef={register}
                            label="Middle Name or Initial"
                            name="middle_name"
                            required={false}
                          />
                        </Col>
                        <Col sm={12} span={4}>
                          <CustomInput
                            defaultValue={filerInfo.contact_info.last_name}
                            disabled={!editing}
                            editing={editing}
                            errorMessage={errors?.last_name?.message}
                            id="last_name"
                            innerRef={register({
                              required: "Last Name is required.",
                              minLength: {
                                value: 2,
                                message: "Last Name must have 2 or more characters.",
                              },
                            })}
                            invalid={!!errors.last_name}
                            label="Last Name"
                            name="last_name"
                            required={true}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col span={12}>
                          <CustomInput
                            defaultValue={filerInfo.contact_info.address1}
                            disabled={!editing}
                            editing={editing}
                            errorMessage={errors?.address1?.message}
                            id="address1"
                            innerRef={register({ required: "Address is required." })}
                            invalid={!!errors.address1}
                            label="Address"
                            name="address1"
                            required={true}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col span={12}>
                          <CustomInput
                            defaultValue={filerInfo.contact_info.address2}
                            disabled={!editing}
                            editing={editing}
                            id="address2"
                            innerRef={register}
                            label="Address (line 2, optional)"
                            name="address2"
                            required={false}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={8} span={5}>
                          <CustomInput
                            defaultValue={filerInfo.contact_info.city}
                            disabled={!editing}
                            editing={editing}
                            errorMessage={errors?.city?.message}
                            id="city"
                            innerRef={register({
                              required: "City is required.",
                              minLength: {
                                value: 3,
                                message: "City must have 3 or more characters.",
                              },
                            })}
                            invalid={!!errors.city}
                            label="City"
                            name="city"
                            required={true}
                          />
                        </Col>
                        <Col sm={4} span={3}>
                          <Label>
                            State: <Span>*</Span>
                          </Label>
                          <Select
                            ref={register({ required: "State is required." })}
                            defaultValue={filerInfo.contact_info.state}
                            disabled={!editing}
                            name="state"
                          >
                            <StateOptions />
                          </Select>
                          {errors.state && (
                            <Span>{errors.state.message}</Span>
                          )}
                        </Col>
                        <Col sm={12} span={4}>
                          <CustomInput
                            defaultValue={filerInfo.contact_info.zipcode}
                            disabled={!editing}
                            editing={editing}
                            errorMessage={errors?.zipcode?.message}
                            id="zipcode"
                            innerRef={register({
                              required: "Zip code is required.",
                              pattern: {
                                value: /^\d{5}(?:[-\s]\d{4})?$/,
                                message: "Zipcode must be valid.",
                              },
                            })}
                            invalid={!!errors.zipcode}
                            label="Zip"
                            name="zipcode"
                            required={true}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={8} span={4}>
                          <CustomInput
                            defaultValue={filerInfo.contact_info.phone}
                            disabled={!editing}
                            editing={editing}
                            errorMessage={errors?.phone?.message}
                            id="phone"
                            innerRef={register({
                              required: "Phone number is required.",
                              pattern: {
                                value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                message: "Phone number must be valid. For example 999-999-9999",
                              },
                            })}
                            invalid={!!errors.phone}
                            label="Phone"
                            name="phone"
                            required={true}
                          />
                        </Col>
                        <Col sm={12} span={4}>
                          <CustomInput
                            defaultValue={filerInfo.email}
                            disabled={true}
                            editing={editing}
                            id="email"
                            label="Email"
                            name="email"
                          />
                        </Col>
                        <Col sm={12} span={4}>
                          <Label>Note:</Label>
                          <NoteMessage color="black">
                            If you need to change your email address, please contact the City Clerk’s Office.
                          </NoteMessage>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={12}>
                          <FlexWrapper>
                            <div>
                              <Label display="inline-block">
                                <Checkbox
                                  ref={register}
                                  defaultChecked={filerInfo.contact_info.hide_details}
                                  disabled={!editing}
                                  name="hide_details"
                                  type="checkbox"
                                />
                                redact personal data on filings</Label>
                            </div>
                          </FlexWrapper>
                        </Col>
                      </Row>
                    </>
                  )}
                </ProfileFieldset>
              </form>
            )}
          </Col>
        </ProfileRow>
        <ProfileRow>
          <Col span={8}>
            <ProfileFieldset>
              <legend>Tasks</legend>
              {taskContent}
            </ProfileFieldset>
          </Col>
        </ProfileRow>
        <ProfileRow>
          <Col span={8}>
            <ProfileFieldset>
              <legend>Filing Entities you are associated with</legend>
              {filingEntityContent}
            </ProfileFieldset>
          </Col>
        </ProfileRow>
        <ProfileRow>
          <Col span={8}>
            <ProfileFieldset>
              <legend>Statement of Economic Interest: Associated Entities</legend>
              {associatedEntityContent}
            </ProfileFieldset>
          </Col>
        </ProfileRow>
      </ContentWrapper>
    </HomeLayout>
  );
};

export default FilerPage;
