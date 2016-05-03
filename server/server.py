#
# Author    VinhLH <vinh.le@vn.zalora.com>
# Copyright Mar 2016
#
# Create a http server

import tornado.ioloop
import tornado.web
from tornado.options import options

import config
from src.DataHandler import DataHandler

def makeApp():
    return tornado.web.Application([
        (r'/data/([a-z-]+)', DataHandler),
    ])

if __name__ == '__main__':
    app = makeApp()

    # add logger
    options.log_file_prefix = config.log
    options.parse_command_line()

    app.listen(config.port)
    tornado.ioloop.IOLoop.current().start()