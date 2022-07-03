from flask import Blueprint

from . import controller

user_routes = Blueprint("users", __name__)

user_routes.route("/create", methods=["POST"])(controller.create)
user_routes.route("/<string:uid>", methods=["GET"])(controller.read)
user_routes.route("/<string:uid>/update", methods=["PATCH"])(controller.update)
user_routes.route("/<string:uid>/delete", methods=["DELETE"])(controller.delete)
