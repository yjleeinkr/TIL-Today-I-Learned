# react-router 및 redux로 상태관리

### header컴포넌트 및 counter, comment-CRUD 처럼 작은 기능 만들면서 연습

1. react-router-dom 공부 
: 페이지 새로고침 없이 url에 따라 컴포넌트 변경을 할 수 있음

2. 상태관리라이브러리 redux 공부
- 전역 상태를 저장해주는 store 따로 만들기 
  (만들고 나서 무조건 App 컴포넌트 감싸주기 )
- 상태를 바꿔주는 함수 reducer를 컴포넌트별로 분리하여 action, 초기값 관리
- reducer에서 action생성 함수를 만들어주면 재사용성 굿

```
const cmmtState = useSelector((state) => state.comment) 
/* 
상태 조회해주는 useSelector에 state.[import한 reducer 이름] 하면
각 reducer의 개별 상태들을 가져와줌
*/ 
```

```
npm install react-router-dom
npm install redux react-redux
npm install -D redux-devtools-extension
```