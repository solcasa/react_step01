import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { useRef, useState } from "react";



const MainVisual = () => {

    const d = [
        { id: 1, title: "title01", desc: "description01" },
        { id: 2, title: "title02", desc: "description02" },
        { id: 3, title: "title03", desc: "description03" },
        { id: 4, title: "title04", desc: "description04" },
    ];
    const [num, setNum] = useState(1);
    const set = {
        arrows: false,
        afterChange: (idx) => setNum(idx + 1)
    }

    const ms = useRef(null);
    //밑에 dom 슬라이드 다시 이름지어주는것. usestate 처럼 위에 임포트시키고.
    //밑에 d.map~ <div>01~03</div> 슬라이드 돌리는 것. 위에 cosnt d 선언된 숫자만큼.  
    return (
        <div>
            <div className="img">
                <img src="./images/img_visual01.jpg" alt="" />
            </div>
            <Slider {...set} ref={ms}>
                {
                    d.map((it, idx, arr) => {
                        return (
                            <div className={`itm itm0${idx + 1}`} key={idx}>
                                {it.title}
                            </div>
                        )
                    })
                }
            </Slider>
            <strong>0{num}</strong> / <span>0{d.length}</span>
            <div className="tab">
                <h2>{d[num - 1].title}</h2>
                <p>{d[num - 1].desc}</p>
            </div>
            <button onClick={() => ms.current.slickPrev()}>prev</button>
            <button onClick={() => ms.current.slickNext()}>next</button>

            <ul>
                {
                    d.map((it, idx) => {
                        return (
                            <li onClick={() => ms.current.slickGoTo(idx)} key={idx}>0{idx + 1}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MainVisual;