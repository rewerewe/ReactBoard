import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export default function BoardModifyForm() {
	const { boardId } = useParams();
	const [complete, setComplete] = useState(false);
	const [board, setBoard] = useState({
		title: '',
		username: '',
		content: '',
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();
	const navigate = useNavigate();

	// 조회
	const getData = async (url) => {
		const res = await axios.post(url); // 2) axios 조회 요청
		return res.data;
	};

	useEffect(() => {
		const res = getData(
			`http://localhost/detail/${Number(boardId)}` // 1) 게시글 상세 조회
		);

		res.then((data) => {
			setBoard(data); // 3) setBoard 변수에 할당
			setComplete(true); // 데이터 수신시 true 로 변경

			setValue('title', board.title); // 필드에 상세데이터 바인딩
			setValue('username', board.username);
			setValue('content', board.content);
		});

		return () => {
			console.log('수정 조회 useEffect가 호출되었습니다.');
		};
	}, [complete]);

	// 수정
	const onSubmit = (data) => {
		console.log('data', data);
		const res = axios.patch(`http://localhost/update/${Number(boardId)}`, data);

		res.then(() => {
			navigate('/boards'); // 등록 후 목록 이동
		});
	};

	return (
		<div className='table'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<table className='boardDetail'>
					<tbody>
						<tr>
							<th>제목</th>
							<td>
								<input
									type='text'
									{...register('title', { required: true })}
									placeholder='제목을 입력해주세요'
								/>
								{errors.title && (
									<span className='required'>제목을 입력하세요.</span>
								)}
							</td>
						</tr>
						<tr>
							<th>작성자</th>
							<td>
								<input
									type='text'
									// value={board.username} 처음 상세데이터 바인딩 시도로 실패함
									{...register('username', { required: true })}
									placeholder='작성자명을 입력해주세요'
								/>
								{errors.username && (
									<span className='required'>작성자명을 입력하세요.</span>
								)}
							</td>
						</tr>
						<tr>
							<th>내용</th>
							<td>
								<textarea
									{...register('content', { required: true })}
									placeholder='내용을 입력해주세요'
								></textarea>
								{errors.content && (
									<span className='required'>내용을 입력하세요.</span>
								)}
							</td>
						</tr>
					</tbody>
				</table>
				<p className='btn-wrap-cen'>
					<button type='submit'>등록</button>
					<button type='button'>취소</button>
				</p>
			</form>
		</div>
	);
}
