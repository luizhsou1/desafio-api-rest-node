// Server Configs
export const port = process.env.PORT || 3000;

// JWT Configs
export const jwtSecret = process.env.JWT_SECRET || 'key_secret';
export const jwtExpirationTime = process.env.JWT_EXPIRATION_TIME || '5m';
