module.exports = Object.freeze({
    // JWT Token
    EXPIRATION_TOKEN: 31536000, // 1 year
    SALT_ENCRYPT: 10,
  
    SESSION_STATUS: {
      ONLINE: true,
      OFFLINE: false,
    },
  
    STATUS: {
      ACTIVE: true,
      INACTIVE: false,
      PUBLISHED: true,
      UNPUBLISHED: false,
    },
  
    // Validation
    MIN_USERNAME_LENGTH: 5,
    MAX_USERNAME_LENGTH: 50,
  });
  