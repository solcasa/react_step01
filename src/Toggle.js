import { useState } from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={`Toggle ${toggle ? 'on' : ''}`}>
            <h2>짜잔02</h2>
            <button onClick={() => setToggle(!toggle)}>CLICK</button>
        </div>
    )
}

export default Toggle;