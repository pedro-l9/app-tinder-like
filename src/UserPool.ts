import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'sa-east-1_zIv2KJTkm',
  ClientId: '33bda6rqg5bs4mhfi9e44rdu1v',
};

export default new CognitoUserPool(poolData);
