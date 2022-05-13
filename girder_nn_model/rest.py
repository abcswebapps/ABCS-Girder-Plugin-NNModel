from girder.models.setting import Setting

from girder.api.rest import Resource
from girder.api.describe import Description, autoDescribeRoute
from girder.api import access

from girder.constants import TokenScope
from .constants import PluginSettings


class NNModel(Resource):
    def __init__(self):
        super(NNModel, self).__init__()
        self.resourceName = PluginSettings.PLUGIN_NAME