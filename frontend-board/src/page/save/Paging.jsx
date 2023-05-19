// import React, { useState } from 'react';
// // import './Paging.css';
// import Pagination from 'react-js-pagination';

// const Paging = ({ page, count, setPage }) => {
// 	const [page, setPage] = useState(1);

// 	const handlePageChange = (page) => {
// 		setPage(page);
// 	};

// 	return (
// 		<Pagination
// 			activePage={page} // 현재페이지
// 			itemsCountPerPage={10} // 페이지당 보여줄 아이템수
// 			totalItemsCount={count} // 총 아이템 수
// 			pageRangeDisplayed={5} // 페이징 내에서 보여줄 페이지 범위
// 			prevPageText={'‹'} // 이전버튼
// 			nextPageText={'›'} // 다음버튼
// 			onChange={handlePageChange} // 페이지 바뀔때 핸들링할 함수
// 		/>
// 	);
// };

// export default Paging;
