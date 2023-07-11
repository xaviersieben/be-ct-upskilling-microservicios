class ClientError extends Error {
  constructor(message, StatusCode = 400) {
    super(message);
    this.statusCode = StatusCode;
  }
}

module.exports = {ClientError};
