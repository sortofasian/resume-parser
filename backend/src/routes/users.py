from flask import Blueprint

from ..controllers import users

user_routes = Blueprint("users", __name__)

user_routes.route("/create", methods=["POST"])(users.create)
user_routes.route("/<str:uid>", methods=["GET"])(users.read)
user_routes.route("/<str:uid>/update", methods=["PATCH"])(users.update)
user_routes.route("/<str:uid>/delete", methods=["DELETE"])(users.delete)
