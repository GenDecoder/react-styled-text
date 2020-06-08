import React from 'react';
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

    return (
        <TextTag
            className={`styled-text ${className || ''}`}
            style={{
                ...{
                    ...(bold && { fontWeight: 'bold' }),
                    ...(center && { textAlign: 'center' }),
                    ...(color && { color }),
                    ...(fontFamily && { fontFamily }),
                    ...(fontSize && { fontSize }),
                    ...(highlighColor && { backgroundColor: highlighColor }),
                    ...(letterSpacing && { letterSpacing }),
                    ...(lineSpacing && { lineHeight: lineSpacing }),
                    ...(marginTop && { marginTop }),
                    ...(uppercase && { textTransform: 'uppercase' }),
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
                },
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
