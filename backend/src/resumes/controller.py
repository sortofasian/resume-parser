import model


def create(uid: str):
    resumes = model.Resumes(uid=uid)
    return resumes.add()


def read(uid: str, rid: str):
    pass


def update(resume_id: str, update: dict):
    pass


def delete(resume_id: str):
    pass
