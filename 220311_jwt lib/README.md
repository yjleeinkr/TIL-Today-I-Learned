## JWT 라이브러리 사용해서 간단한 로그인 기능 만들어보기

1. npm install jsonwebtoken
2. `const jwt = require('jsonwebtoken')`

3. util/jwt.js에 토큰 생성 및 디코딩 함수 만들고 exports 후 server에서 사용

4. 토큰 jwt 생성하기 (jwt = header.payload.signature)

   `jwt.sign(payload,secretKey,options)`

   _여기서 secretKey 및 options에 들어가는 내용은 .env파일로 뺌_

5. 토큰 jwt 디코딩하기

   `jwt.verify(token,secretKey)`

6. 번외 / 로그아웃 시 쿠키(토큰) 지우기

   여러 방법이 있겠지만, 아래 2개가 대표적인듯

   `res.clearCookie('토큰이름')`  
   `res.cookie('토큰이름', {maxAge:0})`
