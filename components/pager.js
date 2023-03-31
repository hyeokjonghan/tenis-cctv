import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
export default function DefaultPager({ pagerInfo, clickEvent }) {
    let startPage = 1
    let lastPage = 1
    let [pagerJsx, setPagerJsx] = useState([])
    let tempPagerJsx = []
    console.dir(pagerInfo)
    if(pagerInfo.total) {
        if(pagerInfo.last_page <= 5) {
            lastPage = pagerInfo.last_page
        } else if(pagerInfo.last_page > 5) {
            if(pagerInfo.current_page <= 3) {
                lastPage = 5
            } else if(pagerInfo.current_page > 3) {
                startPage = pagerInfo.current_page - 2
                lastPage = pagerInfo.current_page + 2
                if(lastPage > pagerInfo.last_page) {
                    lastPage = pagerInfo.last_page
                    startPage = pagerInfo.last_page - 4
                }
            }
        }
    }

    useEffect(() => {
        tempPagerJsx = []
        for(let i = startPage; i <= lastPage; i++) {
            tempPagerJsx.push(i)
        }
        setPagerJsx(tempPagerJsx)
    }, [startPage, lastPage])

    

    
    return <>
        {pagerInfo.total > 0 ? 

        <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${pagerInfo.current_page === 1? 'disabled':''}`} onClick={() => clickEvent(1)}>
                    <span className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </span>
                </li>

                {
                    pagerJsx.map((item) => {
                        return <><li className={`page-item ${pagerInfo.current_page === item?'active':''}`} key={item} onClick= {() => clickEvent(item)}>
                                <span className="page-link">
                                    <span>{item}</span>
                                </span>
                            </li></>
                    })
                }

                <li className={`page-item ${pagerInfo.current_page === pagerInfo.last_page? 'disabled': ''}`} onClick={() => clickEvent(pagerInfo.last_page)}>
                    <span className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </span>
                </li>

            </ul>
        </nav>

        : ''}
        
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