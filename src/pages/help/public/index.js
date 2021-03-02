import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm, usePlugin, useCMS } from "tinacms";
import dynamic from "next/dynamic";
import Head from "next/head";
import useSWR from "swr";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { endpoints } from "../../../constants/endpoints";
import { useAuthContext } from "../../../components/contexts/AuthProvider";
import { GlobalStyle } from "../../../styles/globalStyles";
import { Header, Footer, HomeLayout } from "../../../components/page-layouts";
import { Heading1 } from "../../../components/typography";
import { Button } from "../../../components/buttons";
import {
  MainWrapper,
  MainContent,
  Wrapper,
  FlexWrapper,
} from "../../../components/layout-containers";

function HelpPublic() {
  const context = useAuthContext();
  const cms = useCMS();
  const [data, form, loading] = useForm({
    id: 1,
    label: "Edit Post",
    fields: [
      {
        name: "title",
        label: "Title",
        component: "text",
      },
    ],
    initialValues: {
      title: "Help",
    },
    // loadInitialValues() {
    //   return fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
    //     res.json()
    //   );
    // },
    onSubmit(formData) {
      // post saved form data
      console.log(formData);
    },
  });

  usePlugin(form);

  const canEdit = () => {
    if (context.userProfile?.account_type === "admin") {
      cms.toggle();
    }
  };

  return (
    <HomeLayout>
      <Wrapper height="auto" padding="1rem">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <FlexWrapper justifyContent="space-between" alignItems="center">
            <Heading1>{data.title}</Heading1>
            <Button onClick={canEdit}>Edit </Button>
          </FlexWrapper>
        )}
      </Wrapper>
    </HomeLayout>
  );
}

export default HelpPublic;
