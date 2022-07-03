from ..app import db

from typing import IO


resumes = db["resumes"]
resumes.create_index("rid", name="rid", unique=True)
resumes.create_index("uid", name="uid")


class Resumes:
    def __init__(self, uid):
        self.uid = uid

    def add(self, resume):
        resumes.update_one({"uid": self.uid}, {}, upsert=True)

    def list(self):
        resumes.find({"uid": self.uid})

    def get(self, rid: str):
        pass

    def update(self, rid: str):
        pass

    def delete(self, rid: str):
        pass


class Resume:
    def __init__(self, rid):
        self.rid = rid

    def parse(file: IO):
        pass

    def update(self, update: dict):
        pass
