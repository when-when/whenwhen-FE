import axios from 'axios'

export const kakaoOnSuccess = async (data: any) => {
  const profileData = data.profile.kakao_account.profile
  console.log('이름', profileData.nickname)
  console.log('이미지경로', profileData.thumbnail_image_url)
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
