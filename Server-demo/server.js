const HOST = 'server.com/';

function populateFields(field) {
  api.get(HOST + 'fields', {field}, function (items) {
    let newItems = '';
    for (let item of items) {
      let itemElement = `<li>${item}</li>`;

      newItems += itemElement;
    }

    const itemElements = documen.getElementByClassName(`${field}`);
  });
}

function displayText(response) {
  const outputElement = document.getElementsByClassName("output")[0];
  outputElement.innerHTML += (response + "<br>");
}

// Server

function getFields(data) {
  switch (data.menu) {
    case "a":
      return "I got an A";
    case "b":
      return "I got a B";
    default:
      return "I don't know what I got";
  }
}

const endpoints = {
  "/": {
    "get": () => "hello world"
  },
  "/fields": {
    "get": getFields
  }
}

// API library

function getFunction(url, data, callback) {
  const endpoint = url.substring(url.indexOf("/"), url.length);

  callback(endpoints[endpoint]["get"](data));
}

const api = {
    get: getFunction
};