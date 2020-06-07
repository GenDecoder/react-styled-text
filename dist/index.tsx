import React from 'react';
import './styles.css';
import { TStyledTextProps } from './types';

const StyledText = ({
    bold,
    center,
    children,
    className,
    color,
    fontSize,
    hasLeftSpace,
    hasRightSpace,
    highlighColor,
    indent,
    indentSize = 48, // Equivalent to the standard 1/2 in. for indentation
    lineSpacing,
    letterSpacing,
    numberOfLines,
    selectable = true,
    style,
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
                    fontWeight: bold ? 'bold' : 'normal',
                    fontSize: fontSize || 'inherit',
                    lineHeight: lineSpacing || 'inherit',
                    letterSpacing: letterSpacing || 'inherit',
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
            {indent && <span className="styled-text-indent" style={{ width: indentSize }} />}
            {hasLeftSpace && ' '}
            {children}
            {hasRightSpace && ' '}
        </TextTag>
    );
};

export default StyledText;
