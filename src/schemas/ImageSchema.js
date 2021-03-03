export default class ImageSchema {
  static schema = {
    name: 'Image',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      src: {type: 'string'},
    },
  };
}
