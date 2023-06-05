export default class Api {
    constructor() {
      this._authorization = "e1a4b600-66f9-4d45-b660-4ae737476424";
    }
  
    async _useFetch(url, method, body) {
      const res = await fetch(url, {
        headers: {
          authorization: this._authorization,
        },
        method,
        body: JSON.stringify(body),
      });
  
      if (res.ok) {
        return res.json();
      }
  
      return Promise.reject(`Error ${res.status}`);
    }
  
    async getUserInfoFromServer() {
      const res = await this._useFetch(
        "https://around.nomoreparties.co/v1/web_es_05/users/me ",
        "GET"
      );
      console.log(res);
      return res;
    }
  
    async getCards() {
      try {
        const res = await this._useFetch(
          "https://around.nomoreparties.co/v1/web_es_05/cards ",
          "GET"
        );
  
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  }