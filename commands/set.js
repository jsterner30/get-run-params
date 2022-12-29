import chalk from 'chalk'
import fs from 'node:fs/promises'
import enquirer from 'enquirer'
import getErrorMessage from '../util/getErrorMessage'

async function set () {
    try {


    } catch (error) {
        await getErrorMessage(error)
    }
}

export default set