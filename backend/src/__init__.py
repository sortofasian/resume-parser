import flask
from src.providers.configs import flask_config
from src.providers.mongodb import cleanup_mongodb
from src.providers.routes import add_routes


def create_app():
    app = flask.Flask(__name__)
    app.config.update(**flask_config)
    add_routes(app)
    print("Server load complete!\n")
    return app


def cleanup_app():
    print()
    cleanup_mongodb()
    print("Cleanup complete, exiting...")
    exit(0)
