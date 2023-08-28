/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { Post } from "../models";
import { schema } from "../models/schema";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function Frame418(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const buttonOnClick = useDataStoreCreateAction({
    fields: { content: "new post", userID: authAttributes["email"] },
    model: Post,
    schema: schema,
  });
  return (
    <View
      width="181px"
      height="243px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame418")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="103px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="41px"
        left="39px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Test&#xA;"
        {...getOverrideProps(overrides, "Test")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="161px"
        left="38px"
        size="default"
        isDisabled={false}
        variation="default"
        children="OK"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
