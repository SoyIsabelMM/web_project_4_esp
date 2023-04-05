export default class UserInfo {
  constructor({ nameUserSelector, jobUserSelector }) {
    this._nameSelector = document.querySelector(nameUserSelector);
    this._jobSelector = document.querySelector(jobUserSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      job: this._jobSelector.textContent,
    };
  }

  setUserInfo({ name, job }) {
    this._nameSelector.textContent = name;
    this._jobSelector.textContent = job;
  }
}
