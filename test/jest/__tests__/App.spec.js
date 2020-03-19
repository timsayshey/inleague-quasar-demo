import axios from 'axios';
import {} from 'jest';

describe("Test 'Authentice API' service", () => {
  it('should have missing/invalid username', async () => {
    var bodyFormData = new FormData();
    bodyFormData.set('password', 'openBook99');

    let res = await axios({
      url: 'https://qa.api.inleague.io/v1/authenticate',
      method: 'post',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(null, res => {
      expect(res.response.status).toEqual(400);
    });
  });

  it('should have missing/invlaid password', async () => {
    var bodyFormData = new FormData();
    bodyFormData.set('username', 'jobs@inleague.com');

    let res = await axios({
      url: 'https://qa.api.inleague.io/v1/authenticate',
      method: 'post',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(null, res => {
      // console.log('should have missing/invlaid password', res);
      expect(res.response.status).toEqual(400);
    });
  });

  it('should have no connection', async () => {
    var bodyFormData = new FormData();
    bodyFormData.set('username', 'jobs@inleague.com');
    bodyFormData.set('password', 'openBook99');

    let res = await axios({
      url: 'http://invalid/v1/authenticate',
      method: 'post',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).catch(err => {
      expect(err.response).toEqual(undefined);
    });
  });

  it('should have valid submission but an unsuccessful login', async () => {
    var bodyFormData = new FormData();
    bodyFormData.set('username', 'jobs@inleague.com');
    bodyFormData.set('password', 'invalidPassword');

    let res = await axios({
      url: 'https://qa.api.inleague.io/v1/authenticate',
      method: 'post',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(null, res => {
      // console.log(
      //   'should have valid submission but an unsuccessful login',
      //   res
      // );
      expect(res.response.status).toEqual(401);
    });
  });

  it('should have valid submission and a successful login', async () => {
    var bodyFormData = new FormData();
    bodyFormData.set('username', 'jobs@inleague.com');
    bodyFormData.set('password', 'openBook99');

    let res = await axios({
      url: 'https://qa.api.inleague.io/v1/authenticate',
      method: 'post',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(null, res => {
      expect(res.response.status).toEqual(201);
    });
  });
});
