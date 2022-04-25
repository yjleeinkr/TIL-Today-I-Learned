# passport-local, passport-jwt - 로그인 인증 구현

### (ft. bcrypt 모듈 사용)

<br>

**PASSPORT.js 라이브러리**

모듈 이름 그대로 여권 같은 역할을 하는 모듈

역할 : 클라이언트가 서버에 요청을 보낼 때 자격이 있는지 인증할 때 미들웨어로서 작동한다.  
<br>

1. strategy (전략) 종류에 따라 로그인 인증방식이 다르다.

- Local Strategy (passport-local) : 로컬 DB 로그인 인증 방식
- Social Authentication (passport-kakao, passport-naver 등) : SNS 로그인 인증 방식  
  <br>

2. 동작 원리

   클라이언트가 요청 시 passpo rt에 인증 요청을 보냄 (`passport.authenticate()`)  
   -> 등록된 passport가 인증 성공, 실패 시에 어떻게 컨트롤할건지 결정함  
   <br>

3. bcrypt로 암호화된 비번 DB에 저장
   <br>

   `const salt = brypt.genSalt('해쉬반복횟수')` // 소금 만들어주기 (10~12정도?)

   `const hashedpw = bcrypt.hash(userpw, salt)` // 본격적으로 비번 암호화

<br> 


3. 현재 이해가 안되는 부분

<br>

1/ 원래는 아래처럼 `ExtractJwt` 를 쓰고 싶었으나, 도저히 안되었음..

    const JWTConfig = {
      jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
      secretOrKey: process.env.JWT_SALT
    }

라우터 쪽에서 헤더 설정을 해서 보내주는데도 자꾸 unauthorized라고 error 발생함

    res.setHeader('Authorization', token)

그래서 passport.js 홈페이지에 나와있는대로 cookieExtractor 함수를 만들어서 토큰 인증 미들웨어를 만들어주긴 했는데, 맘에 들지 않음.. 이럴거면 왜 굳이 passport-jwt를 쓰나 싶음..

```
const cookieExtractor = function(req) {
	let token = null;
	if (req && req.cookies)
	{
		token = req.cookies[`jwt`];
	}
	return token;
};

const JWTConfig = {
	jwtFromRequest: cookieExtractor,
	secretOrKey: process.env.JWT_SALT
};
```
