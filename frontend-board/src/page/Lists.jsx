import React from 'react';
import { useNavigate } from 'react-router-dom';

function Lists({ list }) {
	const navigate = useNavigate();

	// 등록
	const handleClickInsBtn = (e) => {
		navigate('/boards/insert');
	};

	// 글 상세보기
	const handleClickTitle = (e) => {
		navigate(`/boards/${e.target.dataset.id}`); // 글 상세페이지로 이동
	};

	return (
		<div className='table'>
			<h2>게시판</h2>
			<p className='btn-wrap-rgt'>
				<button
					type='button'
					onClick={() => handleClickInsBtn()} // 화살표 함수 : 미사용시 컴포넌트 렌더링하는 동안 함수호출하게 됨
				>
					등록
				</button>
			</p>
			<table className='boardList'>
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>작성자</th>
						<th>조회수</th>
						<th>작성일</th>
					</tr>
				</thead>
				<tbody>
					{list.map((board) => (
						<tr
							key={board.id}
							className='cursorPointer'
						>
							<td>{board.id}</td>
							<td>
								<a
									onClick={handleClickTitle}
									data-id={board.id}
								>
									{board.title}
								</a>
							</td>
							<td>{board.username}</td>
							<td>{board.hit}</td>
							<td>{board.insdt}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Lists;
