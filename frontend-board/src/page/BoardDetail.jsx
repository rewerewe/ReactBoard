import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function BoardDetail() {
	const { boardId } = useParams();
	const [complete, setComplete] = useState(false); // axios의 정상 결과 여부(true/false) 기준 값. React에서는 useEffect 없이 axios를 호출하면 화면이 계속 갱신되는 무한루프에 빠짐.
	const [boardDetail, setBoardDetail] = useState([]);
	const navigate = useNavigate();

	// 조회
	const getData = async (url) => {
		const res = await axios.post(url); // 2) axios 요청
		return res.data;
	};

	useEffect(() => {
		const res = getData(
			`http://localhost/detail/${Number(boardId)}` // 1) 게시글 디테일 조회
		);

		res.then((data) => {
			setBoardDetail(data); // 3) setBoardDetail 변수에 할당
			setComplete(true); // 데이터 수신시 true 로 변경
		});

		return () => {
			console.log('상세 조회 useEffect가 호출되었습니다.');
		};
	}, [complete]);

	// 수정
	const handleClickModBtn = () => {
		navigate(`/boards/modify/${Number(boardId)}`); // 수정페이지 이동
	};

	// 삭제
	const handleClickDelBtn = (e) => {
		e.preventDefault(); // 브라우저 리로딩 방지

		const res = axios.delete(`http://localhost/delete/${Number(boardId)}`); // delete 요청

		res.then((data) => {
			navigate('/boards'); // 목록으로 이동
		});
	};

	// 취소
	const handleClickCancleBtn = () => {
		navigate('/boards');
	};

	return (
		<div className='table'>
			<h2>게시판</h2>
			<table className='boardDetail'>
				<tbody key={boardDetail.id}>
					<tr>
						<th>제목</th>
						<td colSpan={3}>{boardDetail.title}</td>
					</tr>
					<tr>
						<th>작성자</th>
						<td>{boardDetail.username}</td>
						<th>작성일</th>
						<td>{boardDetail.upddt}</td>
					</tr>
					<tr>
						<th>내용</th>
						<td colSpan={3}>{boardDetail.content}</td>
					</tr>
				</tbody>
			</table>
			<p className='btn-wrap-rgt'>
				<button
					type='button'
					onClick={() => handleClickModBtn()} // 화살표 함수 : 미사용시 컴포넌트 렌더링하는 동안 함수호출하게 됨
				>
					수정
				</button>
				<button
					type='button'
					onClick={handleClickDelBtn}
				>
					삭제
				</button>
				<button
					type='button'
					onClick={handleClickCancleBtn}
				>
					목록
				</button>
			</p>
		</div>
	);
}
