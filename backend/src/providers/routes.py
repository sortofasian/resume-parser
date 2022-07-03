from flask import Flask

from src.resumes.routes import resume_routes
from src.sessions.routes import session_routes
from src.users.routes import user_routes


def add_routes(app: Flask):
    app.register_blueprint(resume_routes)
    app.register_blueprint(session_routes)
    app.register_blueprint(user_routes)
