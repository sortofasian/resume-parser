from flask import Blueprint

from ..controllers import sessions

session_routes = Blueprint("sessions", __name__)

session_routes.route("/create", methods=["POST"])(sessions.create)
session_routes.route("/<str:uid>", methods=["GET"])(sessions.read)
session_routes.route("/<str:uid>/logout", methods=["DELETE"])(sessions.delete)
