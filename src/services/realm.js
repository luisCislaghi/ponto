import Realm from 'realm';
import PontoSchema from '../schemas/PontoSchema';
import ImageSchema from '../schemas/ImageSchema';

function getRealm() {
  try {
    return new Realm({
      schema: [PontoSchema, ImageSchema],
      schemaVersion: 6,
      migration: (oldRealm, newRealm) => {},
    });
  } catch (error) {
    throw `Error opening realm: ${error}`;
  }
}

export default getRealm();
