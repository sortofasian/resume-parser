from .. import configs


def load(options: dict):
    config = {}
    for key in options:
        if key == "mongodb":
            config["mongodb"] = configs.mongodb.config(options[key])

        if key == "flask":
            config["flask"] = configs.flask.config(options[key])

    return config
