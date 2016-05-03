#
# Author    VinhLH <vinh.le@zalora.com>
# Copyright Mar 2016
#
# Run a resync script for orders, stockes, categories, ...

import subprocess
import tornado.web
import config
import json

class DataHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Content-Type', 'application/json')
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def get(self, cmd):
        result = {
            'data': [
                [1, '2016-05-01 00:00:00', {'score': 777}]
            ]
        }

        self.set_default_headers()
        self.write(json.dumps(result))
