import React from 'react';

export function getSpace(n: number = 1): JSX.Element {
    const spaces: JSX.Element[] = [];
    for (let i = 0; i < n; i++) {
        spaces.push(<span key={`space-${i}`}>&nbsp;</span>);
    }
    return <React.Fragment>{spaces}</React.Fragment>;
}
