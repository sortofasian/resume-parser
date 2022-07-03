from datetime import datetime

import bcrypt
from nanoid import generate as nanoid
from src.providers.mongodb import db

users = db["users"]
users.create_index("uid", name="uid", unique=True)
users.create_index("email", name="email", unique=True)


class User:
    def __init__(self, email: str):
        self._is_new = False
        self.uid = users.find_one({"email": email}).uid

        if email is None:
            self.uid = nanoid(20)
            users.insert_one({"uid": self.uid, "created": datetime.now()})
            self._is_new = True

    def delete_user(self):
        users.delete_one({"uid": self.uid})
        del self

    def get_user(self):
        if self._is_new is True:
            raise Exception("User not created")
            # replace with null? should return 404

        user = users.find_one({"uid": self.uid})
        return {"email": user.email, "first": user.first, "last": user.last}

    def check_user(self, password: str):
        user = self.get_user()
        return bcrypt.checkpw(password.encode(), user.password)

    def update_user(
        self,
        email: str = None,
        password: str = None,
        first: str = None,
        last: str = None,
    ):
        update = {"email": email, "password": password, "first": first, "last": last}

        # Dict size cannot change if iterating over same dict; copy keys to iterate over
        keys = update.keys()
        for key in keys:
            if update[key] is None:
                del update[key]

        # Bcrypt hashing
        if update["password"]:
            update["password"] == bcrypt.hashpw(
                update["password"].encode(), bcrypt.gensalt()
            )

        users.update_one({"uid": self.uid}, update)
        self._is_new = False
        return self.get_user()
