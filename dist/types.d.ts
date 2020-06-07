export type TStyledTextSpecificProps = {
    bold?: boolean;
    center?: boolean;
    color?: string;
    highlighColor?: string;
    lineSpacing?: number;
    letterSpacing?: number;
    numberOfLines?: number;
    selectable?: boolean;
    fontSize?: number;
    uppercase?: boolean;
    //
    indent?: boolean;
    indentSize?: number;
    hasLeftSpace?: boolean;
    hasRightSpace?: boolean;
    tag?: keyof JSX.IntrinsicElements;
};

export type TStyledTextProps = TStyledTextSpecificProps & React.HTMLAttributes<HTMLOrSVGElement>;
