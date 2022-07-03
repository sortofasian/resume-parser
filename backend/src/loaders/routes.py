from .. import routes
from flask import Flask


def load(app: Flask):
    app.register_blueprint(routes.resumes)
    app.register_blueprint(routes.sessions)
