export const environment = {
   production: false,

  client_id: '********',
  client_secret: '**********',
        loginURL: 'https://uttam-api-auth.auth.us-east-1.amazoncognito.com/login?client_id=46s1mf6dm8t88jmfos42ed7noa&response_type=code&scope=openid+profile&redirect_uri=http://localhost:4200/callback',
      
         redirectURL: 'https://www.dhodekhali.com/callback',
      
        cognitoTokenURL: 'https://uttam-api-auth.auth.us-east-1.amazoncognito.com/oauth2/token',
      
        logout: 'https://uttam-api-auth.auth.us-east-1.amazoncognito.com/logout?' +
        'client_id=46s1mf6dm8t88jmfos42ed7noa&' +
        'logout_uri=http://localhost:4200/home',
      
                S3ClientURL: 'https://9gjkvybxkk.execute-api.us-east-1.amazonaws.com/dev/find',
                dynamoDBFindURL: 'https://gcwivq0eja.execute-api.us-east-1.amazonaws.com/dev/find',

}
