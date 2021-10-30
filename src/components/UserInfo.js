export  default  class  UserInfo {
  constructor({ name, job, avatar, id}) {
    this._name = name
    this._job = job
    this._avatar = avatar
    this._id = id
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }
  setUserInfo(userInfo) {
    if (userInfo.name) {
      this._name.textContent = userInfo.name
    }
    if (userInfo.about) {
      this._job.textContent = userInfo.about
    }
    if (userInfo.avatar) {
      this._avatar.src = userInfo.avatar
    }
    if(userInfo._id) {
      this._id.textContent = userInfo._id
    }
  }
}
