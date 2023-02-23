import React from "react";
import style from './StyleLoader.module.css'

type LoaderPropsType = {
    color?: string
    size?: number
}

export const Loader = (props: LoaderPropsType) => {
    return (
        <div className={style.loader}
             style={{
                 'width': props.size,
                 'height': props.size,
                 'borderBottomColor': props.color
             }}>
        </div>
    );
};
