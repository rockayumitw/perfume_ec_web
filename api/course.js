import req from '../plugins/http.js'

// export function apiTestData () {
//     return req.get('/users')
// }

//login: data => callAPI(ompRequest, '/Login/UserLogin', data),

export const apiTestData = () => req.get('/users')
//const apiTestData = params => req.post(`/users/${param}`)


// export const apiTestData = () => req('get', '/users')
// // login api
// export const apiUserLogin = params => req('post', '/WebLogin/Login', params)
// export const apiUserLogout = () => req('post', '/WebLogin/Logout')
// export const apiCheckSession = params => req('post', '/WebLogin/CheckSession', params)

// // polls api: 投票列表 | 確認投票 | 投票建立 | 單一投票查詢 | 取得UID
// export const apiPollsList = params => req('post', '/Polls/PollsList', params)
// export const apicheckVote = params => req('post', '/Polls/CheckVote', params)
// export const apiPollsVoteCreate = params => req('post', '/Polls/PollsVoteCreate', params)
// export const apiPollsOne = params => req('post', '/Polls/PollsOne', params)
// export const apiPollsGetNewGuid = () => req('post', '/Polls/GetNewGuid')

// // polls: create | edit | delete | update or stop
// export const apiPollsCreate = params => req('post', '/Polls/PollsCreate', params)
// export const apiPollsUpdate = params => req('post', '/Polls/PollsUpdate', params)
// export const apiPollsDelete = params => req('post', '/Polls/PollsDelete', params)
// export const apiPollsUpdateStop = params => req('post', '/Polls/PollsUpdateStop', params)

// // uploadImage
// export const apiUploadImage = params => req('post', '/api/UploadImg', params)
