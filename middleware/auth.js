// 특정영역에만 미들웨어를 적용시켜야 한다면 layout 에 붙이는 게 나쁘지 않은 선택이다. 예를 들어서 이 auth 는 관리자 layout 에 붙여버리면 된다. 그러나 현재 login 화면도 admin 의 일부라서(그것만 바꿔주면 되겠지만, 물론 나는 특히 다 default로 해놔서 문제) 그냥 manually 붙여주어도 된다.

export default function (context) {
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
