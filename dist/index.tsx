import React from 'react';
import './styles.css';
import { getSpace } from './utils';
import { TStyledTextProps } from './types';

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
    lineSpacing,
    letterSpacing,
    marginTop = 0,
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
                    backgroundColor: highlighColor || 'inherit',
                    color: color || 'inherit',
                    fontFamily: fontFamily || 'inherit',
                    fontSize: fontSize || 'inherit',
                    fontWeight: bold ? 'bold' : 'normal',
                    lineHeight: lineSpacing || 'inherit',
                    letterSpacing: letterSpacing || 'inherit',
                    marginTop,
                    textAlign: center ? 'center' : 'inherit',
                    textTransform: uppercase ? 'uppercase' : 'none',
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
