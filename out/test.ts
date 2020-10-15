import {DefaultApi} from './api';

const accessToken = 'MY_TOKEN';
const api = new DefaultApi({accessToken})

// The function name matches the "operationId" defined in the corresponding path spec
api.getMyOwnDetails()
  .then(me => {console.log(me)})
  .catch(error => {console.error(error)});
