// named import란?
// import React, {useState} from "react";
// 구문은 먼저 "react" 모듈에서 React를 가져오고,
// 그리고 해당 모듈에서 useState를 선택적으로 가져온다는 뜻.
// React에는 React.Commpnent, React.useState,
// React.useEffect 등이 있다.
// 그리고 가져온 것을 사용할 때도 React.useState()처럼 안쓰고
// 그냥 useState()라고만 써도 된다.
import React, {useState} from "react";

// 상태(state) 변수를 사용하는 경우
export default function StateUseTest() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}