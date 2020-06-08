import React from 'react';
import StyledText from '../dist';

function Samples() {
    return (
        <div>
            {/* <StyledText>Hi Mario!</StyledText> */}
            <StyledText marginTop={20}>How are you?</StyledText>
            <StyledText marginTop={30} tag="h1" indent tabSize={10}>
                <StyledText fontFamily="Fantasy">This is a paragraph</StyledText>
                <StyledText hasLeftSpace>with many font types.</StyledText>
            </StyledText>
        </div>
    );
}

export default Samples;
