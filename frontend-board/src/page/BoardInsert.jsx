import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BoardInsert() {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [userName, setUserName] = useState('');
	const [content, setContent] = useState('');
	const [errors, setErrors] = userState({
		title: {
			invalid: false,
			message: '제목을 입력해주세요.',
		},
		userName: {
			invalid: false,
			message: '이름을 입력해주세요.',
		},
		content: {
			invalid: false,
			message: '내용을 입력해주세요.',
		},
	});

	const handleTitle = (e) => {
		e.preventDefault();
		setTitle(e.target.value);
	};

	const handleUserName = (e) => {
		e.preventDefault();
		setUserName(e.target.value);
	};

	const handleContent = (e) => {
		e.preventDefault();
		setContent(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // 브라우저 리로딩 방지

		// validation
		if (title.equals('')) {
			setErrors((prev) => ({
				...prev,
				title: {
					...prev.title,
					invalid: true,
				},
			}));
		}

		if (userName.equals('')) {
			setErrors((prev) => ({
				...prev,
				userName: {
					...prev.userName,
					invalid: true,
				},
			}));
		}

		if (content.equals('')) {
			setErrors((prev) => ({
				...prev,
				content: {
					...prev.contet,
					invalid: true,
				},
			}));
		}

		let data = {
			title: title,
			username: userName,
			content: content,
		};

		const res = axios.post('http://localhost/insert', data); // post 요청

		res.then(() => {
			navigate('/boards');
		});
	};

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
									value={title}
									onChange={handleTitle}
									placeholder='제목을 입력해주세요'
								/>
							</td>
						</tr>
						<tr>
							<th>작성자</th>
							<td>
								<input
									type='text'
									value={userName}
									onChange={handleUserName}
									placeholder='작성자명을 입력해주세요'
								/>
							</td>
						</tr>
						<tr>
							<th>내용</th>
							<td>
								<textarea
									value={content}
									onChange={handleContent}
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
