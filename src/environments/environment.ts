export const environment = {
 production: false,

  client_id: '*********************',
  client_secret: '*********************',

  loginURL: 'https://uttam-api-auth.auth.us-east-1.amazoncognito.com/login?client_id=*********************&response_type=code&scope=openid+profile&redirect_uri=https://www.dhodekhali.com/callback',

  redirectURL: 'https://www.dhodekhali.com/callback',

  cognitoTokenURL: 'https://uttam-api-auth.auth.us-east-1.amazoncognito.com/oauth2/token',

  logout: 'https://uttam-api-auth.auth.us-east-1.amazoncognito.com/logout?' +
          'client_id=*********************&' +
          'logout_uri=https://www.dhodekhali.com/home',

          S3ClientURL: 'https://9gjkvybxkk.execute-api.us-east-1.amazonaws.com/dev/find',
          dynamoDBFindURL: 'https://gcwivq0eja.execute-api.us-east-1.amazonaws.com/dev/find',

          BUILD_NUMBER : 1.1
};


