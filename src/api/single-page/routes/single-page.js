'use strict';

/**
 * single-page router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::single-page.single-page');
