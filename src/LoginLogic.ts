import axios from 'axios'

export const kakaoOnSuccess = async (data: any) => {
  console.log(data)
  console.log('이름', data.profile.kakao_account.nickname)
  console.log('이미지경로', data.profile.kakao_account.thumbnail_image_url)
  const idToken = data.response.access_token
  console.log('토큰 발견!', idToken)
  try {
    const res = await axios.post('beapi', {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    })
  } catch (error) {
    console.error('로그인 정보 송신 실패:', error)
  }
}
export const kakaoOnFailure = (error: any) => {
  console.log(error)
}
