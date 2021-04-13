/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import React, { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "@material-ui/core"
import { Variant } from "@material-ui/core/styles/createTypography";

export const renderers = {
    paragraph: (value: string) => <div></div>, 
    heading: (props: any) => {
        React.useEffect(() => {
            console.log(props)
        })

        return (<div>{props.children}</div>)
    }
}

export default function MuiMarkdown(props: {md: string}): ReactElement {
    return (
        <ReactMarkdown renderers={renderers}>{props.md}</ReactMarkdown>
    )
} 