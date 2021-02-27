export default class PontoSchema {
  static schema = {
    name: 'Ponto',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      latitude: {type: 'string'},
      longitude: {type: 'string'},
      date: {type: 'date'},
      user_id: {type: 'int'},
    },
  };
}
