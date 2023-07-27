import { useState } from "react";
// useState 치니까 임포트 자동으로 뜸.

const App = () => {

    // $('.App').on('click', function(){})  --> 제이쿼리ver.
    // document.querySelector('.App').addEventListener('click')   --> 자바ver.
    // div클래스네임 뒤 onClick={() => setOn('on')}  --> 리액트ver. css 파일은 따로만들어야되는데 js 는 여기서 바로되네. 다른요소에 적응시키기도쉽군.
    const [on, setOn] = useState('');
    return (
        <div className={`App ${on}`} >
            {console.log(on)}
            <strong>진짜 테스트</strong>
            <button onClick={() => setOn('on')}>짜잔!!!!</button>
        </div>
    )
}

export default App;
// 밖에서 써라잉. 인덱스js 임포트해서!
//<style></style>은 못써서 따로 파일맹그렁 