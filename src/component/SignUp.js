import React, { useState } from "react";
// Sign Form
function SignUp(props) {
    // 이름 상태 변수
    const [name, setName] = useState("");
    // 성별 상태 변수
    const [gender, setGender] = useState("남자");

    // 이름 상태 변수 변경 처리기
    const changeName = (event) => {
        setName(event.target.value);
        console.log(event.target.value)
    };

    // 성별 상태 변수 변경 처리기
    const changeGender = (event) => {
        setGender(event.target.value);
        console.log(event.target.value)
    };

    // submit 클릭 핸들러
    const onSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        alert('이름' + name + gender);
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                이름:
                <input type="text" 
                    value={name} 
                    onChange={changeName} 
                />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} 
                    onChange={changeGender}
                >
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
            <h1>{name}</h1>
            <p>{gender}</p>
        </form>
    );
}

export default SignUp;