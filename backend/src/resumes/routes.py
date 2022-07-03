from flask import Blueprint

from . import controller

resume_routes = Blueprint("resumes", __name__)

resume_routes.route("/create", methods=["POST"])(controller.create)
resume_routes.route("/<string:uid>", methods=["GET"])(controller.read)
resume_routes.route("/<string:uid>/update", methods=["PATCH"])(controller.update)
resume_routes.route("/<string:uid>/delete", methods=["DELETE"])(controller.delete)
