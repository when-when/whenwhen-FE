import axios from 'axios'

export const KakaoOnSuccess = async (data: any) => {
  const profileData = data.profile.kakao_account.profile
  console.log('이름', profileData.nickname)
  console.log('이미지경로', profileData.thumbnail_image_url)
  const idToken = data.response.access_token
  try {
    await axios.post('beapi', {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    })
  } catch (error) {
    console.error('로그인 정보 송신 실패:', error)
  }
}

export const KakaoOnFailure = (error: any) => {
  console.log(error)
}
