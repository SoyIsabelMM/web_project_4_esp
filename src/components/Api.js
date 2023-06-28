export default class Api {
  constructor({ apiKey }) {
    this._authorization = apiKey;
  }

  async _useFetch(url, method, body) {
    const res = await fetch(url, {
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
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
    try {
      const res = await this._useFetch(
        "https://around.nomoreparties.co/v1/web_es_05/users/me",
        "GET"
      );
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async getCards() {
    try {
      const res = await this._useFetch(
        "https://around.nomoreparties.co/v1/web_es_05/cards",
        "GET"
      );
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async saveDataToServer(name, about) {
    try {
      const res = await this._useFetch(
        "https://around.nomoreparties.co/v1/web_es_05/users/me",
        "PATCH",
        {
          name,
          about,
        }
      );

      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async addNewCardToServer(name, link) {
    try {
      const res = await this._useFetch(
        "https://around.nomoreparties.co/v1/web_es_05/cards",
        "POST",
        {
          name: name,
          link: link,
        }
      );
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCardFromServer(cardId) {
    try {
      const res = await this._useFetch(
        `https://around.nomoreparties.co/v1/web_es_05/cards/${cardId}`,
        "DELETE"
      );

      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async addLikeFromCard(cardId) {
    try {
      const res = await this._useFetch(
        `https://around.nomoreparties.co/v1/web_es_05/cards/likes/${cardId}`,
        "PUT"
      );
      console.log(res);

      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteLikeFromCard(cardId) {
    try {
      const res = await this._useFetch(
        `https://around.nomoreparties.co/v1/web_es_05/cards/likes/${cardId}`,
        "DELETE"
      );

      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async updateAvatar(avatarUrl) {
    try {
      const res = await this._useFetch(
        "https://around.nomoreparties.co/v1/web_es_05/users/me/avatar",
        "PATCH",
        {
          avatar: avatarUrl,
        }
      );

      return res;
    } catch (err) {
      console.log(err);
    }
  }
}
