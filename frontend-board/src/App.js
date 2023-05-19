import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './page/Root';
import Home from './component/Home';
import NotFound from './component/NotFound';
import BoardList from './page/BoardList';
import BoardDetail from './page/BoardDetail';
import BoardInsertForm from './page/BoardInsertForm';
import BoardModifyForm from './page/BoardModifyForm';

import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			// outlet 사용, 각 경로를 설정
			{ index: true, element: <Home /> },
			{ path: '/boards', element: <BoardList /> },
			{ path: '/boards/:boardId', element: <BoardDetail /> }, // 상세페이지로 이동할 param(:boardId) 설정
			{ path: '/boards/insert', element: <BoardInsertForm /> }, // 등록페이지 이동
			{ path: '/boards/modify/:boardId', element: <BoardModifyForm /> }, // 수정페이지 이동
		],
	},
]);

export default function App() {
	return (
		// #2
		<RouterProvider router={router} />
		// #1
		// <BrowserRouter>
		// 	<>
		// 		<Header />
		// 		<hr />
		// 		<Routes>
		// 			<Route
		// 				path='/'
		// 				element={<Main />}
		// 			></Route>
		// 			<Route
		// 				exact
		// 				path='/boards'
		// 				element={<BoardList />}
		// 			></Route>
		// 			<Route
		// 				exact
		// 				path='/boards/:id'
		// 				element={<BoardItem />}
		// 			></Route>
		// 		</Routes>
		// 		<hr />
		// 		<Footer />
		// 	</>
		// </BrowserRouter>
	);
}
