import chalk from 'chalk'
export default async function (error) {
    if (error.code === 'EPERM') {
        // remove on next version if we don't see this anymore
        console.log(
            chalk.red.bold('tfvm has to be ran from the console as an administrator for changing versions.')
        )
    } else {
        console.error(error)
    }
}
