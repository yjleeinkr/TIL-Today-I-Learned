import useForm from "./useForm"
import { validateForLogin } from "./validate"

const confirmLogin = async (loginData) => {
  // 비동기 느낌으로~
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(loginData)
    }, 1000)
  })
  alert(`${loginData.userid}님 로그인에 성공하였습니다.`)
}

const LoginForm = () => {
  const defaultValue = {
    userid: '',
    userpw: '',
  }

  const {
    userid,
    userpw,
    submitHandler,
    errors,
    submit
  } = useForm(defaultValue, validateForLogin, confirmLogin)

  return (
    <form onSubmit={submitHandler}>
      <h2>login</h2>
      <ul>
        <li>
          <input type="text" name="userid" placeholder="email" {...userid} />
          {errors.userid && <span>{errors.userid}</span>}
        </li>
        <li>
          <input type="password" name="userpw" placeholder="password" {...userpw} />
          {errors.userpw && <span>{errors.userpw}</span>}
        </li>
        {errors.isMember && <p>{errors.isMember}</p>}
        <li>
          <input type="submit" value="login" disabled={submit} />
        </li>
      </ul>
    </form>
  )
}

export default LoginForm