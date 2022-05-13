import events from '@girder/core/events';
import router from '@girder/core/router';
import { exposePluginConfig } from '@girder/core/utilities/PluginUtils';

import ConfigView from './views/configuration/configView';

exposePluginConfig('nnmodel', 'plugins/nnmodel/config');
router.route('plugins/nnmodel/config', 'nnmodelConfig', function () {
    events.trigger('g:navigateTo', ConfigView);
});