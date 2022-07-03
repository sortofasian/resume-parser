from flask import Blueprint

from ..controllers import resumes

user_routes = Blueprint("resumes", __name__)

user_routes.route("/create", methods=["POST"])(resumes.create)
user_routes.route("/<str:uid>", methods=["GET"])(resumes.read)
user_routes.route("/<str:uid>/update", methods=["PATCH"])(resumes.update)
user_routes.route("/<str:uid>/delete", methods=["DELETE"])(resumes.delete)
