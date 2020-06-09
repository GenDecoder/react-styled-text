import React, { CSSProperties } from 'react';
import './styles.css';
import { TStyledTextProps } from './types';
import { getSpace } from './utils';

const StyledText = ({
    bold,
    center,
    children,
    className,
    color,
    fontFamily,
    fontSize,
    hasLeftSpace,
    hasRightSpace,
    highlighColor,
    indent,
    letterSpacing,
    lineSpacing,
    marginTop,
    numberOfLines,
    selectable = true,
    style,
    tabSize = 4,
    tag = 'span',
    uppercase,
    ...others
}: TStyledTextProps) => {
    const TextTag = `${tag}` as keyof JSX.IntrinsicElements;
    const customStyles: CSSProperties = {};

    bold && (customStyles.fontWeight = 'bold');
    center && (customStyles.textAlign = 'center');
    color && (customStyles.color = color);
    fontFamily && (customStyles.fontFamily = fontFamily);
    fontSize && (customStyles.fontSize = fontSize);
    highlighColor && (customStyles.backgroundColor = highlighColor);
    letterSpacing && (customStyles.letterSpacing = letterSpacing);
    lineSpacing && (customStyles.lineHeight = lineSpacing);
    marginTop && (customStyles.marginTop = marginTop);
    uppercase && (customStyles.textTransform = 'uppercase');

    return (
        <TextTag
            className={`styled-text ${className || ''}`}
            style={{
                ...customStyles,
                ...(numberOfLines && {
                    display: '-webkit-box',
                    WebkitLineClamp: numberOfLines,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }),
                ...(!selectable && {
                    WebkitTouchCallout: 'none' /* iOS Safari */,
                    WebkitUserSelect: 'none' /* Safari */,
                    MozUserSelect: 'none' /* Old versions of Firefox */,
                    MsUserSelect: 'none' /* Internet Explorer/Edge */,
                    userSelect:
                        'none' /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */,
                }),
                ...style,
            }}
            {...others}
        >
            {indent && getSpace(tabSize)}
            {hasLeftSpace && getSpace()}
            {children}
            {hasRightSpace && getSpace()}
        </TextTag>
    );
};

export default StyledText;
