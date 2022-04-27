const defaultValue = {
  userid: 'yjlee',
  userpw: '1234'
}

/* 
기본 : 객체에 key-value 넣는 방법 
input.userid = {}
input['userid'] = {} 
*/

const keys = Object.keys(defaultValue)

// for 문 사용
const input = {}
for (let i = 0; i < keys.length; i++) {
  input[keys[i]] = {
    value: defaultValue[keys[i]]
  }
}
console.log(input)
// { userid: { value: 'yjlee' }, userpw: { value: '1234' } }

// reduce 메서드 사용

const input2 = keys.reduce((acc, cur, i) => {
  acc[cur] = {
    value: defaultValue[cur]
  }
  return acc
}, {})

console.log(input2)
// { userid: { value: 'yjlee' }, userpw: { value: '1234' } }

