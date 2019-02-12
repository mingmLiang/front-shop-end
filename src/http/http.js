import store from '@/vuex/store.js'


const baseURL = 'http://localhost:3000';

const Http = {
  get: function(url, params, successCallback, errorCallback, opts) {
    this.send('GET', url, params, successCallback, errorCallback, opts);
  },
  withCredentials: function() {
    let opts = {
      xhrFields: {
        withCredentials: true
      }
    };
    return opts;
  },
  delete: function(url, params, successCallback, errorCallback, opts) {
    if (params) {
      if (url.indexOf('?') > 0) {
        url += '&';
      } else {
        url += '?';
      }
      if (typeof params == "string") {
        url += params;
      } else {
        let arr = [];
        for (let item in params) {
          arr.push(item + '=' + params[item]);
        }
        url += arr.join('&');
      }
    }
    this.send('DELETE', url, params, successCallback, errorCallback, opts);
  },
  getJSONP: function(url, params, successCallback, errorCallback, opts) {
    if (url.indexOf('?') > 0) {
      url += '&callback=?';
    } else {
      url += '?callback=?';
    }
    this.send('GET', url, params, successCallback, errorCallback, opts);
  },
  post: function(url, params, successCallback, errorCallback, opts) {
    this.send('post', url, params, successCallback, errorCallback, opts);
  },
  put: function(url, params, successCallback, errorCallback, opts) {
    this.send('PUT', url, params, successCallback, errorCallback, opts);
  },
  putToBody: function(url, params, successCallback, errorCallback, opts) {
    this.sendToBody('PUT', url, params, successCallback, errorCallback, opts);
  },
  sendToBody: function(method, url, params, successCallback, errorCallback, opts) {
    if (!opts)
      opts = {};
    opts.contentType = 'application/json; charset=utf-8';
    let str = typeof params != 'string' ? JSON.stringify(params) : params;
    this.send(method, url, str, successCallback, errorCallback, opts);
  },
  postToBody: function(url, params, successCallback, errorCallback, opts) {
    this.sendToBody('POST', url, params, successCallback, errorCallback, opts);
  },
  postFile: function(url, params, successCallback, errorCallback, progressCallback, opts) {
    if (!opts)
      opts = {};
    opts.contentType = false;
    opts.processData = false;
    opts.xhr = function() {
      let xhr = $.ajaxSettings.xhr();
      xhr.upload.addEventListener('progress', function(e) {
        if (progressCallback) {
          progressCallback.call(this, {
            loaded: e.loaded,
            total: e.total
          });
        }
      }, false);
      return xhr;
    };
    this.send('POST', url, params, successCallback, errorCallback, opts);
  },
  send: function(method, url, params, successCallback, errorCallback, opts) {
    // 项目的通用提示
    let successCallback_=function(data){
      if(data.code!==200){
        // console.log(data.msg);
      }
      // switch(data.code)
      // {
      //   case 200:
      //     console.log('成功');
      //     break;
      //   case 300:
      //     console.log('权限验证失败');
      //     break;
      //   case 400:
      //     console.log('失败');
      //     break;
      //   default:
      //     break;
      // }
    };
    let _this = this;
    let settings = {
      data: params,
      dataType: 'JSON',
      method: method,
      success: [successCallback_,successCallback],
      error: function(jqXHR) {
        if (errorCallback)
          errorCallback.call(_this, jqXHR);
      }
    };
    if (opts) {
      for (let item in opts) {
        settings[item] = opts[item];
      }
    }
    $.ajax(baseURL + url, settings);

  }

};
export default Http