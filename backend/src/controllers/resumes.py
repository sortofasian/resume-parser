from ..models import Resumes


def create(uid: str):
    resumes = Resumes(uid=uid)
    return resumes.add_resume


def read(uid: str, rid: str):
    pass


def update(resume_id: str, update: dict):
    pass


def delete(resume_id: str):
    pass
