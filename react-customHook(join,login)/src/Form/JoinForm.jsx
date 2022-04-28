import useForm from './useForm.js'
import { validate } from './validate.js'

const confirmJoin = async (joinData) => {
  // 비동기 통신
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(joinData)
    }, 1000)
  })
  alert(`${joinData.userid}로 가입이 완료되었습니다.`)
}

const JoinForm = () => {
  const defaultValue = {
    userid: '',
    userpw: '',
    userMobile: '',
  };

  const {
    userid,
    userpw,
    userMobile,
    submitHandler,
    errors,
    submit
  } = useForm(defaultValue, validate, confirmJoin)

  return (
    <form onSubmit={submitHandler}>
      <h2>join us</h2>
      <ul>
        <li>
          <input type="text" name="userid" placeholder='email' {...userid} />
          {errors.userid && <span>{errors.userid}</span>}
        </li>
        <li>
          <input type="password" name="userpw" placeholder='password' {...userpw} />
          {errors.userpw && <span>{errors.userpw}</span>}
        </li>
        <li>
          <input type="text" name="userMobile" placeholder='mobile' {...userMobile} />
          {errors.userMobile && <span>{errors.userMobile}</span>}
        </li>
        <li><input type="submit" value='join' disabled={submit} /></li>
      </ul>
    </form>
  )
}

export default JoinForm