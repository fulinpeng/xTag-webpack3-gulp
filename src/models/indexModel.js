/**
 * Created by flp on 2018/4/12.
 */
import rp from "request-promise";
export default class indexModel {
  initnum() {
    return new Promise((reselve, reject) => {
      rp({
        uri: "http://localhost:8888/practice/conmysql/initnum.php",
        method: "GET"
      }).then(data => {
        const result = JSON.parse(data);
        if (data) {
          reselve(result);
        } else {
          reject({});
        }
      });
    });
  }
  addition() {
    return new Promise((reselve, reject) => {
      rp({
        uri: "http://localhost:8888/practice/conmysql/praise.php",
        method: "GET"
      }).then(data => {
        const result = JSON.parse(data);
        if (data) {
          reselve(result);
        } else {
          reject({});
        }
      });
    });
  }
  list() {
    return new Promise((reselve, reject) => {
      rp({
        uri: "http://192.168.0.162:57002/task/list",
        method: "GET"
      }).then(data => {
          console.log('@@@@@@@@-success', data);
        // const result = JSON.parse(data);
        if (data) {
          reselve(data);
        } else {
          reject({});
        }
      }, (err) => {
        console.log('########-err', err);
        if (err) {
          reselve(err);
        } else {
          reject({});
        }
      });
    });
  }
}
