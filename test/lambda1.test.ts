import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Lambda1 from '../lib/lambda1-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Lambda1.Lambda1Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
