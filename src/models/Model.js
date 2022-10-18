
class Model {

  /**
   *
   * @param {Object} params
   */
  constructor(url,params) {
    this.url = url
    this.params = params;
  }

  buildUrl() {
    let stringUrl = ``;
    
    for (const property in this.params) {
      stringUrl += `${property}=${this.params[property]}&`;
    }   
    // console.log(stringUrl);
    return stringUrl; 
  }

  async fetchToApi() {
    
    let paramsUrl = this.buildUrl(); 
  
    let result = await fetch(this.url+paramsUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("erreur fetch to api : " + error);
    });

    return result;
  }

}

export default Model;