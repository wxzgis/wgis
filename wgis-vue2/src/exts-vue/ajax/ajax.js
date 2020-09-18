import Vue from 'vue';
import axios from 'axios'

const get = async (url, obj) => {
  return (await axios.get(url, { params: obj })).data;
}

const post = async (url, obj) => {
  return (await axios.post(url, obj)).data;
}

Vue.prototype.$ajax = {
  get, post
}
