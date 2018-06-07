import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token:null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state,post) {
        state.loadedPosts.push(post)
      },
      editPost(state,editedPost){
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state,token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      // nuxtServerInit(vuexContext, context) {
      //   return axios
      //     .get(process.env.baseUrl + '/posts.json')
      //     .then(res => {
      //       const postsArray =[]
      //       for (const key in res.data) {
      //         postsArray.push({ ...res.data[key], id: key})
      //       }
      //       vuexContext.commit('setPosts', postsArray)
      //     })
      //     .catch(e => context.error(e));
      // },
      // nuxtServerInit(vuexContext, context) {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       vuexContext.commit('setPosts', [
      //           {
      //             id: "1",
      //             title: 'My Post',
      //             previewText: "This is our first Post!",
      //             thumbnail: 'http://nerdcrumble.com/wp-content/uploads/2017/04/best-tech-sites.jpg'
      //           },
      //           {
      //             id: "2",
      //             title: 'My Second Post',
      //             previewText: "This is our Second Post!",
      //             thumbnail: 'http://nerdcrumble.com/wp-content/uploads/2017/04/best-tech-sites.jpg'
      //           }
      //         ]
      //       )
      //       resolve()
      //     },1000)
      //   }
      // )},
          // reject(new Error())
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return axios.post('https://nuxt-blog-tw.firebaseio.com/posts.json?auth=' + vuexContext.state.token, createdPost)
          .then(result => {
            vuexContext.commit('addPost', {...createdPost, id: result.data.name})
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext,editedPost) {
        return axios.put('https://nuxt-blog-tw.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
          .then(res => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      authenticateUser(vuexContext, authData) {
        let authUrl  =
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='+process.env.fbAPI
        if (!authData.isLogin) {
          authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='+process.env.fbAPI
        }
        return axios
          .post(authUrl, {
          email:authData.email,
          password:authData.password,
          returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit("setToken", result.data.idToken);
            localStorage.setItem('token', result.data.idToken);
            localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.data.expiresIn)*1000);
            localStorage.setItem('currentId', result.data.email);
            Cookie.set("jwt", result.data.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + Number.parseInt(result.data.expiresIn) *1000
            );
            return axios.post('http://localhost:3000/api/track-data', {data: 'Authenticated!'})
              .then(res => {
                console.log(res.data.message);
              })
            // vuexContext.dispatch('setLogoutTimer',result.data.expiresIn*1000);
          })
          .catch(e => console.log(e))
      },
      // setLogoutTimer(vuexContext, duration) {
      //   setTimeout(() => {
      //     vuexContext.commit('clearToken')
      //   }, duration)
      // },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;

        if (req) {
          if (!req.headers.cookie) {
            // 이 경우 할 수 있는 게 없으니 그냥 return
            return;
          }
          const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split('=')[1];
          expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split("=")[1];

        } else if (process.client) {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem('tokenExpiration');
        }
        //expirationDate 앞에 + 붙이는 이유는 숫자로 변환하기 위해서다.
        if (new Date().getTime() > +expirationDate || ! token) {
          console.log('No token or invalid token');
          // alert('No token or invalid token');
          vuexContext.dispatch('logout');
          return;
        }
        // 쿠키는 서버에서 사용하는 것이고, 그렇기에 브라우저에서 동작하는 vuex 기반의 setLogout Timer 는 쓸모가 없어진다. 다른 방법으로 시간을 체크해야 함.
        // vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime());
        vuexContext.commit('setToken', token);
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken');
        Cookie.remove('token');
        Cookie.remove('expirationDate');
        if (process.client) {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiration');
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
