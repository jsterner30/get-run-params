import { fromSSO } from '@aws-sdk/credential-provider-sso'

export default async function (config) {
    const credentials = await fromSSO({ profile: config.profile })();
    return new (await import('@aws-sdk/client-ssm')).SSMClient({ credentials: credentials, region: config.region})
}
