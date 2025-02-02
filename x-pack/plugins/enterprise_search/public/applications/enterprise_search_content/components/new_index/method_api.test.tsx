/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';

import { shallow } from 'enzyme';

import { MethodApi } from './method_api';
import { NewSearchIndexTemplate } from './new_search_index_template';

describe('API ingestion method', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders API ingestion method tab', () => {
    const wrapper = shallow(<MethodApi />);
    const template = wrapper.find(NewSearchIndexTemplate);

    expect(template.prop('type')).toEqual('api');
  });
});
