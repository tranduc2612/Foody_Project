import classNames from "classnames/bind";
import style from "./button.module.scss";
import { Link, LinkProps } from "react-router-dom";

import React from "react";

type ButtonProps = {
    content: string,
    to?: string,
    href?: string
    classNames?: string,
    onClick?: (event: Event) => void
}

const cx = classNames.bind(style);

type CompType = "a" | typeof Link;

function MyButton({content, to, href, classNames, onClick , ...passprops}: ButtonProps & Record<string, any>) {
    let Comp: CompType = 'a';

    const props: ButtonProps = {
        onClick,
        content: ""
    }

    if(to){
        props.to = to;
        Comp = Link
    }else{
        props.href = href;
        Comp = "a";
    }
    
    return ( <Comp className={cx("custom__button")} {...props as LinkProps} {...passprops}>{content}</Comp> );
}

export default MyButton;