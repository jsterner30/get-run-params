import { SSOClient, GetRoleCredentialsCommand } from '@aws-sdk/client-sso'

export default async function (options) {
    const client = new SSOClient({ region: options.region });

    const params = {
        /** input parameters */
    }
    const command = new GetRoleCredentialsCommand(params);

}