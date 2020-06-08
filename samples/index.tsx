import React from 'react';
import StyledText from '../dist';

function Samples() {
    return (
        <div>
            <StyledText center marginTop={20} tag="h1" uppercase>
                <StyledText fontFamily="Fantasy">Page</StyledText>
                <StyledText hasLeftSpace>title</StyledText>
            </StyledText>
            <StyledText marginTop={30} tag="p" indent tabSize={10}>
                <StyledText fontFamily="Fantasy">This is a paragraph</StyledText>
                <StyledText hasLeftSpace>with many font types.</StyledText>
            </StyledText>
        </div>
    );
}

export default Samples;
