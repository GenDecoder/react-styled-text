export type TStyledTextSpecificProps = {
    //Applied to "style"
    bold?: boolean;
    center?: boolean;
    color?: string;
    highlighColor?: string;
    lineSpacing?: number;
    letterSpacing?: number;
    marginTop?: number;
    numberOfLines?: number;
    selectable?: boolean;
    fontFamily?: string;
    fontSize?: number;
    uppercase?: boolean;
    // Not applied to "style"
    indent?: boolean;
    tabSize?: number;
    hasLeftSpace?: boolean;
    hasRightSpace?: boolean;
    tag?: keyof JSX.IntrinsicElements;
};

export type TStyledTextProps = TStyledTextSpecificProps & React.HTMLAttributes<HTMLOrSVGElement>;
