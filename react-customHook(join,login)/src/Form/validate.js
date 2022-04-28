import userAccount from "../mockupData"

export const validate = ({ userid, userpw, userMobile }) => {
  const errors = {}
  const emailReg = /^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
  const mobileReg = /^010-([0-9]{4})-([0-9]{4})$/

  if (!userid) {
    errors.userid = '이메일을 입력해주세요'
  } else if (!emailReg.test(userid)) {
    errors.userid = '입력된 이메일이 유효하지 않습니다.'
  }

  if (!userpw) {
    errors.userpw = '비밀번호를 입력해주세요'
  } else if (userpw.length < 8) {
    errors.userpw = '8자 이상의 패스워드를 사용해야 합니다.'
  }

  if (!userMobile) {
    errors.userMobile = '핸드폰 번호를 입력해주세요'
  } else if (!mobileReg.test(userMobile)) {
    errors.userMobile = '입력된 번호가 유효하지 않습니다.'
  }
  return errors
}

export const validateForLogin = ({ userid, userpw }) => {
  const errors = {}

  if (!userid) {
    errors.userid = '이메일을 입력해주세요'
  }
  if (!userpw) {
    errors.userpw = '비밀번호를 입력해주세요'
  }
  if (userid && userpw) {
    const [verifiedUser] = userAccount.filter((v) => v.userid === userid && v.userpw === userpw)
    if (!verifiedUser) errors.isMember = '이메일 또는 비밀번호가 틀렸습니다.'
  }
  return errors
}

