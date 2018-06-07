// middleware 도 새로고침하면 서버사이드에서 한 번 돌게 된다. 그렇기 땜에 브라우저에서만 접근 가능한 localStorage 를 이용하려면 if 문으로 현재 서버인지 아닌지확인해줘야 에러를 방지할 수 있다.

// export default function (context) {
//   if (process.client) {
//     context.store.dispatch('initAuth', null);
//   } else {
//     context.store.dispatch('initAuth', context.req);
//   }
// }

//어차피 client side 라면 context.req 가 null 일테니 아래처럼 간단하게 써도 괜찮다.
export default function (context) {
  console.log("[Middleware] Check Auth");
  context.store.dispatch('initAuth', context.req)
}
