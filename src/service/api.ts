import axios from 'axios';
import { tableStruct } from '../components/TableEvents/interfases';
interface response {
  status: number;
  data: Array<tableStruct>;
}
const instance = axios.create({
  baseURL: 'https://63c3e170a9085635752daa33.mockapi.io/',
});

export const table = {
  getTableData() {
    return instance
      .get('Data')
      .then((resp: response) => {
        if (resp.status === 200) {
          return {
            data: resp.data,
            empty: false,
            error: false,
          };
        }
        if (resp.status === 204) {
          return {
            data: [],
            empty: true,
            error: false,
          };
        }
      })
      .catch((err) => {
        return {
          data: [],
          empty: false,
          error: true,
        };
      });
  },
};
