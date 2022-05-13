import './routes';

import { registerPluginNamespace } from '@girder/core/pluginUtils';

import * as NNModel from './index';

registerPluginNamespace('nnmodel', NNModel);