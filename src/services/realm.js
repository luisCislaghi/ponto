import Realm from 'realm';
import PontoSchema from '../schemas/PontoSchema';

export default function getRealm() {
  return Realm.open({
    schema: [PontoSchema],
  });
}
