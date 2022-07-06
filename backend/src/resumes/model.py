import unicodedata as uni
from base64 import b64decode

import textract
from gensim.parsing import preprocessing as prep
from nanoid import generate as nanoid
from src.providers.ml import phrases, word2vec
from src.providers.mongodb import db

resumes = db["resumes"]
resumes.create_index("rid", name="rid", unique=True)
resumes.create_index("uid", name="uid")


class Resumes:
    def __init__(self, uid):
        self.uid = uid

    def parse(self, filename: str, b64file: str):
        tempname = "temp_" + nanoid(5) + filename
        with open(tempname) as f:
            f.write(b64decode(b64file))
        text = textract.process(tempname)
        temp = uni.normalize("NFKD", text).encode("ascii", "ignore")
        temp = temp.lower()
        temp = temp.split(". ")
        resume = []
        for sentence in temp:
            sentence = prep.preprocess_string(
                sentence,
                filters=[
                    prep.remove_stopwords,
                    prep.strip_punctuation,
                    prep.strip_multiple_whitespaces,
                    prep.strip_numeric,
                ],
            )
            resume.append(phrases[sentence])
        for sentence in resume:
            for word in sentence:
                skills = ["engineering"]
                word2vec.wv.cosine_similarities(word, skills)

    def add(self, resume):
        resumes.update_one({"uid": self.uid}, {}, upsert=True)

    def update(self, rid: str):
        pass

    def get(self, rid: str):
        pass

    def get_all(self):
        pass

    def delete(self, rid: str):
        pass

    def delete_all(self):
        pass
