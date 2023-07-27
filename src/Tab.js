import { useState } from "react"

const Tab = () => {
    const data = [
        { id: 1, title: "tab01", content: 'tab content 01' },
        { id: 2, title: "tab02", content: 'tab content 02' },
        { id: 3, title: "tab03", content: 'tab content 03' },
    ]

    const [num, setNum] = useState(0);
    return (
        <section className="Tab">
            <ul className="tab_menu">
                {
                    data.map((it, idx) => {
                        return (
                            <li onClick={() => setNum(idx)}>{it.title}</li>
                        )
                    })
                }
            </ul>
            <div className="tab_content">
                {data[num].content}
            </div>
        </section>
    )
}

export default Tab;