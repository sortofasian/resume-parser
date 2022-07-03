from ..models import Session


def create(uid: str):
    session = Session(uid)
    return session


def read():
    pass


def delete():
    pass
