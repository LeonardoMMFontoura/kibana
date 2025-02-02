/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { selectMonitorStatus } from '../../state/monitor_summary';
import { useMonitorListBreadcrumbs } from '../monitors_page/hooks/use_breadcrumbs';
export const MonitorSummaryPage = () => {
  const { data } = useSelector(selectMonitorStatus);

  useMonitorListBreadcrumbs([{ text: data?.monitor.name ?? '' }]);

  return <></>;
};
