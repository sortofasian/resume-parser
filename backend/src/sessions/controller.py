from . import model


def create(uid: str):
    session = model.Session(uid)
    return session


def read():
    pass


def delete():
    pass
