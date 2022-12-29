

async function fetchSsmParamsByPath (ssm, path, parameters){
    const command = new GetParametersByPathCommand({ Path: path.path, Recursive: true, ...token != null && { NextToken: token }, WithDecryption: true })
    try {
        // Send request and transform response
        const { Parameters = [], NextToken } = await ssm.send(command)
        parameters.push(...Parameters.map(parameter => ({ ...parameter, Path: path })))

        // Recursively call to get next parameters since the max number returned is 10
        if (NextToken != null) {
    await fetchSsmParamsByPath(ssm, path, parameters, NextToken)
}
} catch (e) { // e is technically an unknown/any type
    const message = e instanceof Error ? e.message : JSON.stringify(e)
    // It's possible that the parameter is not required, so we'll handle failed responses and only warn if
    // verbose logging is turned on via the DEBUG environment variable
    console.log(`Cannot resolve path from AWS SSM '${path.path}': ${message}`)
}
return parameters
}