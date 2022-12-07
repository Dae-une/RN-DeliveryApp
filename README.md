# 개발하기 전, 네비게이션 을 먼저 구상하여 코딩해야 편함

# 토큰 저장하기

async-sotrage 는 암호화 되지 않음 보안에 민감하지않은 데이터 저장
encryptedStorage 암호화 되기 때문에 보안에 민감한 데이터 저장

# env

개발 환경별로 달라지는 값은 react-native-config

# 숫자 3자리마다 , 찍기

```
price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
```

# ScrollView

스크롤을 하려면 ScrollView를 사용해야하지만
화면에 보이지 않는 부분까지 렌더링을 하기 때문에 메모리 낭비에, 성능이 좋지 않다.
그래서 FlatList를 사용하는것이 더 좋다.
