import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function BoardInsertForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		const res = axios.post('http://localhost/insert', data);

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
									<span className='required'> 제목을 입력하세요.</span>
								)}
							</td>
						</tr>
						<tr>
							<th>작성자</th>
							<td>
								<input
									type='text'
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
