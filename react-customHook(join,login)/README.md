# custom hook

어제 했던 건 input box 내용만 custom hook으로 했다면 (useInput),
이번 건 submit도 같이 custom hook으로 제작함 (useForm)

저번엔 커스텀 훅과 폼체크용 함수를 Join 컴포넌트에 다 넣었다면,
이번엔 파일을 따로 분리해서 만들었다.

- 커스텀 훅 : useForm.js
- 폼 체크용 파일 : validate.js 

<br>
- useForm.js  

1. input 상태관리 
   - input (userid,userpw) 에 onChange 이벤트가 일어나면 해당 value값들을 받아서 상태 업데이트
   - 저번엔 {value, onChange} 로 name별로 hook의 리턴값을 받은 반면,  
   - 이번엔 input의 내용을 한꺼번에 가져와서 (`Object.keys(객체)` 로 키값을 배열로 받아옴)  
    각 key로 id,pw에 대한 value와 함수를 뽑아쓸 수 있게끔 한 것  
   ``` 
     { 
       userid : { values : defaultValue.userid, onChange }, 
       userpw : { values : defalutvalue.userpw, onChange }
     } 
      ```
      
    **point : 배열에 담긴 key값을 이용하여 객체화 하는 작업**  
    [reduce 메서드 사용 예제](https://github.com/yjleeinkr/What-I-learned/blob/main/react-hooks-join2/reduce.js)  

2. submitHandler 실행   

   - submit이 발동되었을 떄 실행되는 함수를 컴포넌트 상에서 useForm 인자값으로 넘긴다.  

   1. input의 초기값을 담은 객체 
   2. 폼체크 함수
   3. 제출 버튼 눌렀을 시 확인알람 

3. array 또는 object를 리턴한다.  
    - return [value]; 또는 retrun {value}; 

4. join 폼을 만들어놓으니 login 폼에서 쓰기가 편했다.
