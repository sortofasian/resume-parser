from ..models import User


def create(user: dict):
    new_user = User()
    new_user.update_user(
        email=user["email"],
        password=user["password"],
        first=user["first"],
        last=user["last"],
    )
    return


def read(uid):
    user = User(uid)
    return user.get_user()


def update(uid, update):
    user = User(uid)
    return user.update()


def delete():
    pass
