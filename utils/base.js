
function rnd(min , max){
  return Math.floor(min+Math.random()*(max-min));  

}
module.exports = {
  hash(d , key){
    let ret = {}
    d.forEach((i)=>{
      ret[i[key]] = i
    })
    return ret
  },

  isEmail(v){
  	return /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(v)
  },

  ip(){
    return rnd(50,250) + "." + rnd(50,250) + "." + rnd(50,250)+ "." + rnd(50,250);  
    
  },

  base64_encode(v){
    return new Buffer(v).toString('base64')
  },

  base64_decode(v){
    return new Buffer(v, 'base64').toString()
  }
}