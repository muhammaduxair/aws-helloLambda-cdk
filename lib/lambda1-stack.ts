import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";

export class Lambda1Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
    });

    const api = new apigw.LambdaRestApi(this, "myLambdaEndpoint", {
      handler: hello,
      proxy: false,
    });

    // api is accept only cars url
    const items = api.root.addResource("/");
    items.addMethod("GET"); // GET /items

    const items2 = api.root.addResource("/hello");
    items2.addMethod("GET"); // GET /items
  }
}
