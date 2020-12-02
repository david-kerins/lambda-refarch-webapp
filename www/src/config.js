// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "67cl29u7eou09816p52t7fefcp",     // CognitoClientID
  "api_base_url": "https://pnekqtvb0e.execute-api.ca-central-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-dkerins-lambda-test-1.auth.ca-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d10tp9pf1ykcoh.amplifyapp.com"                                      // AmplifyURL
};

export default config;
