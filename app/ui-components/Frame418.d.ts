/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame418OverridesProps = {
    Frame418?: PrimitiveOverrideProps<ViewProps>;
    Test?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Frame418Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame418OverridesProps | undefined | null;
}>;
export default function Frame418(props: Frame418Props): React.ReactElement;
