export default class UserInfo {
  constructor({ nameUserSelector, jobUserSelector, avatarSelector }) {
    this._nameSelector = document.querySelector(nameUserSelector);
    this._jobSelector = document.querySelector(jobUserSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      job: this._jobSelector.textContent,
    };
  }

  setUserInfo({ name, job, avatar }) {

    if(name)
      this._nameSelector.textContent = name;

    if(job)
      this._jobSelector.textContent = job;
    
    if(avatar)
      this._avatarSelector.src = avatar;
  }
}
