from girder import plugin
from girder.settings import SettingDefault

from . import rest
# import copy
# from girder import events

SettingDefault.defaults.update({
})

class NNModelPlugin(plugin.GirderPlugin):
    DISPLAY_NAME = 'NNModel'
    CLIENT_SOURCE_PATH = 'web_client'
    def load(self, info):
        info['apiRoot'].nnmodel = rest.NNModel()
