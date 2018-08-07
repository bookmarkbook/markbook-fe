import axios from 'axios'
import { BASEURL } from './config'

axios.defaults.timeout = 15000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


function getToken() {
  let token = localStorage.getItem('token');
  return token;
}

function addToken(p) {
  let payload = p;
  if (payload) {
    payload.token = getToken();
  } else {
    payload = { token: getToken() };
  }
  return payload;
}

function checkAuthFail(reponse) {
  if (data.data.result === 'authfail') {
    window.location = '/#/login'
    throw 'authfail'
  }
}

export async function ajax(method, url, options) {
  return await axios({
    method: method,
    url: url,
    ...options
  })
}

export async function get(url, params) {
  return await ajax('get', BASEURL + url, { params: params }).data;
}

export async function getAuth(url, params) {
  const responce =  await ajax('get', BASEURL + url,
    { params: addToken(params) });
  return responce.data;
}

export async function postWithoutAuth(url, payload, params, options) {
  console.log(payload);
  const responce = await ajax('post', BASEURL + url,
    { params: params, data: payload, ...options });
  return responce.data;
}

export async function post(url, payload, params, options) {
  const responce = await ajax('post', BASEURL + url,
    { params: addToken(params), data: payload, ...options });
  return responce.data;
}

export async function patch(url, payload, params, options) {
  const responce = await ajax('patch', BASEURL + url,
    { params: addToken(params), data: payload, ...options });
  return responce.data;
}

export async function del(url, params) {
  const responce = await ajax('delete', BASEURL + url,
    { params: addToken(params) });
  return responce.data;
}

export const path = {
  login: 'login',
  signup: 'register',
}