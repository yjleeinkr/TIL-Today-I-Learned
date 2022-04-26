import { useState, useEffect } from 'react'
import axios from 'axios'

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
  }
}

const validate = ({ userid, userpw }) => {
  const errors = {}

  const idCheckurl = `http://localhost:4000/api/user/idCheck`
  const body = { userid }
  const idCheck = axios.post(idCheckurl, body)

  if (!userid) {
    errors.userid = '이메일을 입력해주세요.'
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userid)) {
    errors.userid = '이메일 형식이 유효하지 않습니다.'
  } else {
    idCheck.then((result) => {
      console.log(result)
      const { isNewId } = result.data
      if (!isNewId) errors.userid = '중복 이메일 입니다.'
      // errors.userid가 가입완료뒤에 뜬다.. 해결해야함
    })
  }

  console.log(errors)

  if (!userpw) {
    errors.userpw = '비밀번호를 입력해주세요'
  } else if (userpw.length < 8) {
    errors.userpw = '8자리 이상 입력해주세요.'
  }
  return errors
}

const Join = () => {
  const id = useInput('')
  const pw = useInput('')
  const [submit, setSubmit] = useState(false)
  const [errors, setErrors] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setSubmit(true)

    const joinData = {
      userid: id.value,
      userpw: pw.value,
    }
    setErrors(validate(joinData))
  }

  useEffect(() => {
    if (submit) {
      if (Object.keys(errors).length === 0) {

        async function joinUser() {
          const url = 'http://localhost:4000/api/user/join'
          const body = {
            userid: id.value,
            userpw: pw.value,
          }
          const result = await axios.post(url, body)
          const { idx } = result.data
          console.log(idx)
          if (idx) {
            alert('가입 완료')
            setSubmit(false)
          } else {
            alert('가입 실패')
          }
        }
        joinUser()
      }
    }
  }, [errors])

  return (
    <form onSubmit={submitHandler}>
      <h2>join us</h2>
      <ul>
        <li>
          <input type="text" name="userid" placeholder="email" {...id} />
          {errors.userid && <span>{errors.userid}</span>}
        </li>
        <li>
          <input type="password" name="userpw" placeholder="password" {...pw} />
          {errors.userpw && <span>{errors.userpw}</span>}
        </li>
        <li><input type="submit" value="join" disabled={submit} /></li>
      </ul>
    </form>
  )
}

export default Join