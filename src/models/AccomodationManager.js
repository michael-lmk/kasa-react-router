import Model from "./Model.js";

class AccommodationManager extends Model {
  constructor(params){
    super("/data/logements.json",params);
  }

  async getAllAcco() {
    let acco = await this.fetchToApi();
    return acco;
  }
  
}

export default AccommodationManager;