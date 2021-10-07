/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

export default function ({ getService, loadTestFile }) {
  const browser = getService('browser');
  const log = getService('log');
  const esArchiver = getService('esArchiver');
  const kibanaServer = getService('kibanaServer');

  describe('timelion app', function () {
    // unskipped due to flakiness in cloud in v7.15 and 7.14
    // timelion app is hidden in these versions and is being removed in 7.16
    this.tags(['ciGroup1', 'skipCloud']);

    before(async function () {
      log.debug('Starting timelion before method');
      await browser.setWindowSize(1280, 800);
      await esArchiver.loadIfNeeded('test/functional/fixtures/es_archiver/logstash_functional');
      await kibanaServer.uiSettings.replace({ defaultIndex: 'logstash-*' });
    });

    loadTestFile(require.resolve('./_expression_typeahead'));
  });
}
