from . import loaders

import json
import flask


app = flask.Flask(__name__)

with open("config.json", "r", encoding="utf8") as f:
    config = json.load(f)
configs = loaders.configs.load(config)
app.config.update(**configs["flask"])

db = loaders.mongodb.load(configs["mongodb"])
print(db)
routes = loaders.routes.load(app)


print("Server load complete!\n")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)

loaders.mongodb.cleanup()

print("Cleanup complete, exiting...")
exit(0)
