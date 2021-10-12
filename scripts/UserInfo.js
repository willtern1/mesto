export  default  class  UserInfo {
  constructor({ name, job}) {
    this._name = name
    this._job = job
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }
  setUserInfo(userInfo) {
    this._name.textContent = userInfo.profile_name
    this._job.textContent = userInfo.profile_job
  }
}
