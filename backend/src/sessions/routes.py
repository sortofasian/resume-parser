from flask import Blueprint

import controller

session_routes = Blueprint("sessions", __name__)

session_routes.route("/create", methods=["POST"])(controller.create)
session_routes.route("/<string:uid>", methods=["GET"])(controller.read)
session_routes.route("/<string:uid>/logout", methods=["DELETE"])(controller.delete)
