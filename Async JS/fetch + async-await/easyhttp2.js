class EasyHTTP {
  //GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  //PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  //DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = await "Resource Deleted...";
    return resData;
  }
}
