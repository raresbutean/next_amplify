/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewPostInputValues = {
    content?: string;
};
export declare type NewPostValidationValues = {
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewPostOverridesProps = {
    NewPostGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewPostProps = React.PropsWithChildren<{
    overrides?: NewPostOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewPostInputValues) => NewPostInputValues;
    onSuccess?: (fields: NewPostInputValues) => void;
    onError?: (fields: NewPostInputValues, errorMessage: string) => void;
    onChange?: (fields: NewPostInputValues) => NewPostInputValues;
    onValidate?: NewPostValidationValues;
} & React.CSSProperties>;
export default function NewPost(props: NewPostProps): React.ReactElement;
