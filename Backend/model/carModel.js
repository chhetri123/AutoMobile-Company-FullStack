const MySql = require("../Utills/DbService");
const promise = require("../Utills/promise");

class CarModel extends MySql {
  constructor() {
    super();
  }

  async getCarInfo(id) {
    try {
      const query = `select * from (options join engine on engine.id=options.engine_id) join specs on specs.id= options.specs_id where options.id=${id};`;

      const [response] = await promise(query, "");
      const [{ name, body_style, brand_id }] = await this.find("model", {
        id: response.model_id,
      });
      const [{ name: brandName }] = await this.find("brand", { id: brand_id });
      return [
        {
          Brand: brandName,
          model: name,
          body_Type: body_style,
          color: response.color,
        },
        {
          power: response.power,
          torque: response.torque,
          speed: response.speed,
        },
        {
          Fuel_Type: response.fuel_type,
          Front_Sus: response.front_sus,
          Rear_Sus: response.rear_sus,
          Front_brake: response.front_brake,
          Rear_brake: response.rear_brake,
        },
      ];
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCarInventory(id) {
    try {
      const query = `select I.name,address,I.dealer_id from car join inventory as I on car.inventory_id=I.id where car.id=${id};`;
      return await promise(query, "");
    } catch (error) {
      throw new Error(error);
    }
  }
}
module.exports = new CarModel();
