from datetime import timedelta

import jwt
from nanoid import generate as nanoid
from src.providers.mongodb import db

session_expiry = timedelta(days=3).seconds
sessions = db["sessions"]
sessions.create_index("created", name="ttl", expireAfterSeconds=session_expiry)


class Session:
    def __init__(self, uid: str):
        self.uid = uid
        sid = sessions.find_one({"uid": uid}).sid
        if not sid:
            sessions.insert_one({"uid": self.uid, "sid": nanoid(40)})

    def get_token(self):
        sid = sessions.find_one({"uid": self.uid}).sid
        jwt.encode({"sid": sid})
