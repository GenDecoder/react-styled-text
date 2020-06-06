import React from 'react';
import './styles.css';
import { TSampleProps } from './types';

export default function Sample({ color }: TSampleProps) {
    const yourNumber: number = Math.random() * 100;
    return (
        <div className="container" style={{ color }}>
            <h1>Hi Content Creator!!!</h1>
            <h2>Your Lucky number is: {yourNumber.toFixed(0)}</h2>
        </div>
    );
}
