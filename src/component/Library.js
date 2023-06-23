import React from "react";
import Book from "./Book"

export default function Library() {
    const pageNum = 300;
    return (
        <div>
            <Book name="처음 만난 파이썬"  numOfPage={pageNum} />
            <Book name="처음 만난 AWS"  numOfPage={400} />
            <Book name="처음 만난 리액트"  numOfPage={500} />
        </div>
    );
}