import React from "react";

export default function MapArrayExample() {
    const numbers = [1, 2, 3, 4, 5];
    const dNum = numbers.map((number) => number * 2);
    return (
        <>
            <h2>map함수로 Array다루기</h2>
            <ul>
                {dNum.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </>
    );
}