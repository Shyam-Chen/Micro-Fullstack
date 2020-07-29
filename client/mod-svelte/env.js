function Environments() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.APP_NAME = process.env.APP_NAME || 'Mod Svelte';
  this.APP_DESCRIPTION = process.env.APP_DESCRIPTION || '';

  this.HOST_NAME = process.env.HOST_NAME || '0.0.0.0';
  this.SITE_PORT = process.env.SITE_PORT || 8004;
  this.SITE_URL = process.env.SITE_URL || `http://${this.HOST_NAME}:${this.SITE_PORT}`;
  this.APP_BASE = process.env.APP_BASE || '/';
}

module.exports = new Environments();
