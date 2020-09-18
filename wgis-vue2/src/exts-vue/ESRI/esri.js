import Vue from 'vue'
import { loadModules } from 'esri-loader'
import esriConf from '@/config/esri.conf'



Vue.prototype.$esri = {
  load(modules) {
    return new Promise((resolve, reject) => {
      loadModules(modules, esriConf).then(classes => resolve(classes)).catch(err => reject(err));
    });
  }
}
