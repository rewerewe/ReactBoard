import axios from 'axios';
import { useState, useEffect } from 'react';
import Lists from './Lists';
import Pagination from '@mui/material/Pagination';

function BoardList({ itemsPerPage }) {
	const [complete, setComplete] = useState(false); // axios의 정상 결과 여부(true/false) 기준 값. React에서는 useEffect 없이 axios를 호출하면 화면이 계속 갱신되는 무한루프에 빠짐.
	const [list, setList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage, setItemPerPage] = useState(10);

	// 조회
	const getData = async (url) => {
		const res = await axios.get(url);
		return res.data;
	};

	useEffect(() => {
		const res = getData('http://localhost/list');
		res.then((data) => {
			setList(data); // 조회 결과 목록데이터를 list 변수에 할당
			setComplete(true); // 데이터 수신시 true 로 변경
		});

		return () => {
			console.log('목록 조회 useEffect가 호출되었습니다.');
		};
	}, [complete]);

	// 페이징
	const indexOfLast = currentPage * itemPerPage;
	const indexOfFirst = indexOfLast - itemPerPage;

	const currentBoard = (board) => {
		let currentBoard = 0;
		currentBoard = board.slice(indexOfFirst, indexOfLast);
		return currentBoard;
	};

	return (
		<div>
			<Lists list={list}></Lists>
			<Pagination count={10} />
		</div>
	);
}

export default BoardList;
