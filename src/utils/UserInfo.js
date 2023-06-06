export default class UserInfo {
  constructor({ nameUserSelector, jobUserSelector, avatarSelector }) {
    this._nameSelector = document.querySelector(nameUserSelector);
    this._jobSelector = document.querySelector(jobUserSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      about: this._jobSelector.textContent,
    };
  }

  setUserInfo({ name, about, avatar }) {

    if(name)
      this._nameSelector.textContent = name;

    if(about)
      this._jobSelector.textContent = about;
    
    if(avatar)
      this._avatarSelector.src = avatar;
  }
}
