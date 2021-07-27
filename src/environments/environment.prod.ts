export const environment = {
   production: false,

  client_id: '********',
  client_secret: '**********',

  loginURL: 'https://uttam-api-auth.auth.us-east-1.amazoncognito.com/login?client_id=******&response_type=code&scope=openid+profile&redirect_uri=http://localhost:4200/callback',

  redirectURL: 'http://localhost:4200/callback',

  cognitoTokenURL: 'https://uttam-api-auth.auth.us-east-1.amazoncognito.com/oauth2/token',

  logout: 'https://uttam-api-auth.auth.us-east-1.amazoncognito.com/logout?' +
          'client_id=*******&' +
          'logout_uri=http://localhost:4200/home',

          S3ClientURL: 'https://twfmwqt9t2.execute-api.us-east-1.amazonaws.com/dev',
  
          dynamoDBFindURL: 'https://gcwivq0eja.execute-api.us-east-1.amazonaws.com/dev/find'

}
