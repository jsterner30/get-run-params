import chalk from 'chalk'
import fs from 'node:fs/promises'
import enquirer from 'enquirer'
import getErrorMessage from '../util/getErrorMessage.js'
import getConfig from '../util/getConfig.js'
import resolveSSMClient  from "../util/resolveSSMClient.js";

async function get () {
    try {
        const  config = await getConfig()
        const ssm = await resolveSSMClient(config)


        const params = {
            Name: '/sesmith4-fav-color-ui-dev/callback_url',
            WithDecryption: true
        }
        const parametes = await ssm.getParameters(params)

        console.log(parametes)




    } catch (error) {
        await getErrorMessage(error)
    }
}

export default get