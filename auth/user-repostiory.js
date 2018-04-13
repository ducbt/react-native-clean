import ApiGateway from '../common/api-gateway';
import AppConfig from '../app-config';

export default class UserRepository{

  signinConfig = AppConfig.apiBasePath + '/signin';
  apiGateway = new ApiGateway(this.signinConfig);

  async signIn(userModel) {
    let retModel = {status: null, message: null};
    let response = await this.apiGateway.save(userModel);
    retModel.status = response.success
        ? 'submitted-success'
        : 'submitted-failed';
    retModel.message = response.message;
    retModel.token = response.token;
    return retModel;
  }

}