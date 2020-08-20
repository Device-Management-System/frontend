const scope = [
  'read:dashboard',
  'read:users',
  'read:devices',
  'read:device',
  'write:device',
  'edit:device',
  'delete:device',
  'read:requests',
  'read:request',
  'write:request',
  'edit:request',
  'delete:request',
  'read:settings',
  'read:profile',
  'edit:profile',
];

export const config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: window.location.origin,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  scope: scope.join(' '),
};
