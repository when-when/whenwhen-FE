import KakaoLogin from 'react-kakao-login'
import { KakaoOnFailure, KakaoOnSuccess } from '../apis/LoginLogic'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const clientId = process.env.REACT_APP_KAKAO_KEY || ''
  const navigate = useNavigate()

  const onSuccess = (data: any) => {
    KakaoOnSuccess(data)
    navigate('/main')
    console.log('성공')
  }

  return (
    <div className="my-10 font-['Pretendard']">
      <KakaoLogin
        token={clientId}
        onSuccess={onSuccess}
        onFail={KakaoOnFailure}
        onLogout={() => console.log('로그아웃됨')}
      />
    </div>
  )
}
