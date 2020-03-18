import axios from 'axios';

describe("Test 'resource' service", () => {
  it('should authenticate', async () => {
    let res = await axios({
      url: 'authenticate',
      method: 'post',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    expect(res.status).toEqual(200);
    expect(res.data).toHaveProperty('id');
  });
});
