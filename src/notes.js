// example of axios. 
// the return value of get,put,post,delete promise object
// always console.log data first, before settingState so you know what you are getting back. 

// get & delete cannot have a body only a URL or ID 
// post & put have both 

class App {
    constructor() {}

    getAPIStuff() {
      axios
        .get(`BASE_URL`+`posts`)
        .then(res => {
          console.log( res );
          return res.data
        })
        .then(res => {
          console.log( 'res:', res );
          return res.data
        })
        .catch(err=>{
          toast.error('failed to retrieve requested info');
        })
    }

      // ALT longform using 'promise' variable 
    getAPIStuff() {
      let promise = axios.get(`BASE_URL`+`posts`);
      promise.then(res => {
        // console.log( res );
        this.setState({ posts: res.data });
      })
      promise.catch(err=>{
        toast.error('failed to retrieve requested info')
      })
    }


    // axios.put(`$BASE_URL}/vehicles/${id}/${priceChange}`)

    /* 
    
    axios.post(urlString, body).then(res => {
      console.log( 'res:', res )
    }).catch(err => toast.err("failed to do whatever ..."))
    
    */

}