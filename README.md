## react-board

---
### git 명령어 (기본) 
  현재 상태 확인
```
git status
```
<br>
  현재 프로젝트에 git 저장소 생성하기
```
git init
```
<br>
  git 원격에 저장소 생성하기 연결하기
```
git remote add <name> <url>
```
<br>
  변경사항 원격서버 (git 서버)에 업로드 (push)
```
git push <name>
```
<br>
  git 프로젝트 저장소 복제 및 다운로드 하기
```
git clone <git url>
```

<br>
  저장소에 수정 내용 전체 추가하기
```
git add .
```
<br>
  저장소에 커밋하기
```
git commit -m "커밋 메시지"
```
<br>
  변경사항 원격서버 (git 서버)에 업로드 (push)
```
git push origin master/branch
```
<br>
  원격 저장소의 변경내용 현재 디렉토리 내 프로젝트로 가져오기 (pull)
```
git pull
```
<br>
  바뀐 내용 비교하기
```
git diff [브랜치이름] [다른 브랜치이름]
```
<br>
  파일 및 폴더 추가
```
git add .
```
<br>
  원격(remote)에 push 하지 않을 ignore 파일 만들기 <br> 
	1) .git 파일이 있는 폴더에서 <br>
	2) .gitignore 파일 생성하기 <br>
	3) 생성된 ignore 파일에 무시할 파일 및 폴더를 아래처럼 추가 후 저장 <br>
```
### 폴더 무시
sample/

## 파일 무시
sample.txt

## 다음 확장자 전체 무시
*.exe
*.zip
```
<br>
	4) gitignore 파일 작성 후 add > commit > push 하면 ignore 적용됨
```
git add .
git commit -m "ignore file & config"
git push origin master
```
<br>
	5) 이미 commit 되어 기존 git 으로 관리되는 파일은 .gitignore 을 작성해도 반영되지 않음 
  <br>
  → 기존 chched 를 지우고 commit 해주기 <br>
	   (git rm --chched 명령어는 add 된 영역에서 파일을 제거하고, local 영역에서 파일을 유지함) <br>
```
## 파일이면
git rm --chched sample.txt

## 전체 파일이면 
git rm --chched *.txt

## 폴더라면
git rm --chched sample/ -r
```
<br>

---
#### git config 관련<br>

전체 config 리스트 확인 
```
git config --list
```
<br>
git config 설정하기 
```
git config --global user.name "홍길동"
git config --global user.email "id@naver.com"
```
<br>
git config 삭제하기 
```
git config --unset user.name 
git config --unset user.email 
```
<br>
git config 삭제해도 계속 남아있다면, global로 설정한 사용자 정보 삭제하기 
```
git config --unset --global user.name 
git config --unset --global user.email 
```
---
#### Branch 관련
해당 브랜치로 이동
```
git checkout [브랜치명]
```
<br>
원하는 브랜치로 이동
```
git branch [브랜치명]
```
<br>
원하는 브랜치로 push 하여 원격 서버에 전송
```
git push origin [브랜치명]
```
<br>
모든 브랜치 확인
```
git brach -a
```
---
### React 설치하기

1. 터미널에서 설치명령어를 입력한다

	```
	npx create-react-app 프로젝트명
	```

2. npx 명령어 사용하려면 node.js 설치 필요

   - LTS 설치권장
   - 18.16.0 설치
     <br>

3. 프로젝트폴더 생성 > vscode 열기 > 터미널(cmd)로 선택 > 설치 명령어

   ```
   npx create-react-app my-app .
   ```

   <br>

4. React 프로젝트 실행하기
   ```
   npm start
   ```
   <br>
   4-1) 설치 후 npm start 실행시 package.json 파일이 없는 경우 package.json 에러가 발생함. 
    → 프로젝트 초기화 명령어 실행 
   ```
   npm init
   ```
   <br>
   4-2) git clone 후 package.json 파일이 있는 경우  
    → 프로젝트 내 모듈 설치 명령어 실행 (package.json 설정에 맞추어 node_modules 설치됨)
   ```
   npm install
   ```
   <br>

---

### 리액트 기본내용 요약

1. React / ReactDom

   1. 리액트는 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리다. 웹앱 view를 빠르게 만들수 있다.
   2. 리액트를 설치 후 실행해보면, index.html 과 src 폴더를 볼 수 있다.
   3. 유저는 index.html 파일을 바라보게 되고, ReactDom가 컴포넌트를 html에 연결해준다.
   4. 다시 정리하면, index.js의 ReactDom.render()로 <App> 컴포넌트가 index.html의 <div id="root">와 연결되는 구조다.
      <br>

2. 컴포넌트

   1. 컴포넌트명 첫 글자는 대문자로 만든다.
   2. 리턴은 JSX 로 한다. (파일명을 .jsx로 저장하면 됨.)
   3. 컴포넌트는 하나의 태그를 반환한다.
      - <div></div>
      - <></>
      - <React.Fragment></React.Fragment>
   4. class 사용시 속성명은 className을 사용한다.
   5. js 코드 사용시 <백틱 + 달러 + 중괄호> 로 표출한다 `${js}`
   6. 컴포넌트는 props 로 데이터를 넘겨줄 수 있다.
      <br>

3. react-router-dom

   ```
   npm install react-router-dom
   ```

   1. 리액트에는 라우터(경로 선택 프로세스) 내장기능이 없어 따로 모듈을 설치해주어야 한다.
   2. 브라우저에서 웹서버에 요청하여 css, javascript 받아 html 렌더링 하는 방식이 아닌,
      링크 클릭으로 url을 업데이트 하여, ui를 즉시 렌더링 / 데이터만 업데이트 하는 방식이다.
   3. route 페이지 만들고 Link 로 url를 업데이트 할 수 있다
   4. react-router-dom 중 Outlet을 사용하면, 상위 경로에 선언해주며, 하위 경로가 렌더링 되면서
      중첩된 UI를 표시할 수 있다.
   5. 다시 정리하면, Route를 여러번 사용하지 않고, createBrowserRouter의 속성 children에 path 와 element를 추가한다
      createBrowserRouter([{ children:[path: '', element: ''] }])

   ```
   추가구문 :
   import { useNavigate, useParams } from 'react-router-dom';
   ```

   6. useNavigate 을 추가하여 path 로 페이지를 이동할 수 있다.
   7. useParams 을 추가하여 url로 이동하며, 파라미터를 넘길 수 있다.
      <br>

4. useState

   ```
   추가구문 : 컴포넌트 내 최상단
   import { useState } from 'react';
   ```

   1. 리액트 훅 중 하나로, 변수의 상태를 추가하거나 업데이트 할 수 있다.
   2. 이전 상태를 기억하거나 데이터 재생성을 방지한다.
   3. useState(초기값)를 선언하며 초기값을 정할 수 있다.
      const [list, setList] = useState(초기값);
      <br>

5. axios

   ```
   npm install axios
   ```

   1. HTTP 통신 라이브러리로, Promise 기반 이다.
   2. Promise 는 비동기 작업의 완료 및 실패를 나타내는 객체를 말한다.
   3. HTTp 통신 라이브러리는 백엔드와 프론트엔드의 통신을 위해 사용하는 것.
   4. 자바스크립트에는 fetch 가 있고, 프레임워크에서 ajax 구현시에 axios 를 사용하곤 한다.
   5. 용법은 axios()함수를 호출할 때, url, method, data를 넘겨준다.

   ```
   	axios({
   	  url: 'localhost:4000', // 서버주소
   	  method: 'get', // 통신방식 : get, post, put, patch, delete
   	  data: { // 인자로 보낼 데이터
   		age: '20'
   	  }
   	});
   ```

   <br>

6. useEffect

   ```
   추가구문 : 컴포넌트 내 최상단
   import { useEffect } from 'react';
   ```

   1. axios 혹은 fetch 로 데이터를 받아오는 경우, 페이지가 로딩될때 마다 데이터를 받아오게 된다.
   2. 그 때, useEffect(callBack func(), [])을 사용하게 되는데, 무한루프에 빠지지 않도록 사용하며, 두번째 인자인 dependency 에 [] 텅빈배열/처음보여질때 딱 한번만 실행되어야 변수를 써주면 데이터가 한번만 로딩된다.
      <br>

7. react-hook-form

   ```
   npm install react-hook-form
   ```

   1. 리액트를 통해 제어되는 컴포넌트가 아닌 비제어컴포넌트로 폼(form)을 다룰 수 있다.
   2. 적용하게 된 이유는 사용자입력값이 변경되면 setState 를 해주어야 하는데,
      form 내 필드가 많을 경우 여러필드를 동시에 관리하기 위한 state 가 많아져 복잡해진다.
   3. 용법은 react-hook-form 설치 후, useForm을 import 한 뒤, register, handleSubmit, formState: { errors }를 선언한다.
   4. form 내 필드에 {...register(필드명)}를 추가하며, handleSubmit 에 submit 후 로직을 적으면 된다.
   5. formState:{ errors } 등록으로 필드에서 직접 필수값, 최소/최대자리수, 패턴 등 validation 등록/체크가 가능하다.
