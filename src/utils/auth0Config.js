export const config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: `${window.location.origin}/dashboard`,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
};
