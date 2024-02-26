import { Link } from 'react-router-dom'

export const Hd = () => {
    return (
        <header>
            <h1 className="text-center"><a href="/"><img src="/img/logo/umu_logobig.jpg" alt="" /></a></h1>
            <ul id="gnb" className="d-flex justify-content-center align-items-center">
                    <li>
                        <Link to="/umu">우무</Link>
                    </li>
                    <li>
                        <Link to="/pudding">푸딩</Link>
                    </li>
                    <li>
                        <Link to="/goods">굿즈</Link>
                    </li>
                    <li>
                        <Link to="/umusupport">우무 파라솔 지원</Link>
                    </li>
                    <li>
                        <Link to="/location">위치</Link>
                    </li>
            </ul>
        </header>
    );
};
  
  