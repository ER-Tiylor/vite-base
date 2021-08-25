// 本地存储
const setStorage=(name, data)=>{
  let dataType = typeof data;
  // json对象
  if(dataType === 'object'){
      window.sessionStorage.setItem(name, JSON.stringify(data));
  }
  // 基础类型
  else if(['number','string','boolean'].indexOf(dataType) >= 0){
      window.sessionStorage.setItem(name, data);
  }
  // 其他不支持的类型
  else{
      alert('该类型不能用于本地存储');
  }
}
// 取出本地存储内容
const getStorage = (name)=>{
  let data = window.sessionStorage.getItem(name);
  if(data){
      return JSON.parse(data);
  }
  else{
      return '';
  }
}
// 删除本地存储
const removeStorage = (name)=>{
  window.sessionStorage.removeItem(name);
}

export default{
  setStorage,
  getStorage,
  removeStorage
}