import PropTypes from 'prop-types';
export default function DefaultPager({ pagerInfo, clickEvent }) {
    return <>
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <span className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </span>
                </li>

                <li className="page-item"><span className="page-link">1</span></li>
                <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                </li>
                <li className="page-item"><span className="page-link">3</span></li>

                <li className="page-item">
                    <span className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </span>
                </li>
            </ul>
        </nav>
    </>
}

DefaultPager.prototype = {
    pagerInfo: PropTypes.object,
    clickEvent: PropTypes.func
}

/*
    현재 페이지 값
    총 페이지 값
    clickAction ==> 아마 통일일 거고, url을 받는 형태로?
    출력단위는 내가 만들어야 함
*/