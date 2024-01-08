import KakaoLogin from 'react-kakao-login'
import { kakaoOnFailure, kakaoOnSuccess } from './LoginLogic'

export default function Login() {
  const clientId = process.env.REACT_APP_KAKAO_KEY || ''

  return (
    <div className="font-['Pretendard']">
      <KakaoLogin
        token={clientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </div>
  )
}