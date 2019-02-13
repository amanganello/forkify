import axios from 'axios';
import { apiKey, apiSearchUrl } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(
        `${apiSearchUrl}search?key=${apiKey}&q=${this.query}`
      );
      if (res.data.error) console.log('Forkify 50 calls limit reached');
      else this.result = res.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
