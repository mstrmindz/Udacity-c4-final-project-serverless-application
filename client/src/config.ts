// Once your application is deployed, copy an API id here so that the frontend can interact with it
const apiId = '1devaql53m'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // Create an Auth0 application and copy values from it into this map. For example:
  domain: 'dev-2eepsfvz5vn6l3ap.uk.auth0.com', // Auth0 domain
  clientId: 'Qecnb7AcK7h3AWtZrmUstuQbHcmGjjFq', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
