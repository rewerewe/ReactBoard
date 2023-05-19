import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function BoardInsertForm() {
	const { boardId } = useParams();
	const [complete, setComplete] = useState(false); // axios의 정상 결과 여부(true/false) 기준 값. React에서는 useEffect 없이 axios를 호출하면 화면이 계속 갱신되는 무한루프에 빠짐.
	const [board, setBoard] = useState({
		title: '',
		username: '',
		content: '',
	});
	const navigate = useNavigate();

	// 조회
	const getData = async (url) => {
		const res = await axios.post(url); // 2) axios 조회 요청
		return res.data;
	};

	useEffect(() => {
		const res = getData(
			`http://localhost/detail/${Number(boardId)}` // 1) 게시글 디테일 조회
		);

		res.then((data) => {
			setBoard(data); // 3) setBoard 변수에 할당
			setComplete(true); // 데이터 수신시 true 로 변경
		});

		return () => {
			console.log('useEffect가 호출되었습니다.');
		};
	}, [complete]);

	// 수정
	const handleChange = (event) => {
		const { value, name } = event.target; //event.target에서 name과 value만 가져오기
		setBoard((prevBoard) => ({
			...prevBoard,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const res = axios.patch(
			`http://localhost/update/${Number(boardId)}`,
			board
		); // axios 수정1

		res.then(() => {
			navigate('/boards'); // 등록 후 목록 이동
		});
	};

	// 취소
	const handleClickCancleBtn = () => {
		navigate('/boards');
	};

	return (
		<div className='table'>
			<form onSubmit={handleSubmit}>
				<table className='boardDetail'>
					<tbody>
						<tr>
							<th>제목</th>
							<td>
								<input
									type='text'
									name='title'
									value={board.title || ''}
									onChange={handleChange}
									placeholder='제목을 입력해주세요'
								/>
							</td>
						</tr>
						<tr>
							<th>작성자</th>
							<td>
								<input
									type='text'
									name='username'
									value={board.username || ''}
									onChange={handleChange}
									placeholder='작성자명을 입력해주세요'
								/>
							</td>
						</tr>
						<tr>
							<th>내용</th>
							<td>
								<textarea
									name='content'
									value={board.content || ''}
									onChange={handleChange}
									placeholder='내용을 입력해주세요'
								></textarea>
							</td>
						</tr>
					</tbody>
				</table>
				<p className='btn-wrap-cen'>
					<button
						type='submit'
						// 화살표 함수 : 미사용시 컴포넌트 렌더링하는 동안 함수호출하게 됨
					>
						등록
					</button>
					<button
						type='button'
						onClick={handleClickCancleBtn}
					>
						취소
					</button>
				</p>
			</form>
		</div>
	);
}
