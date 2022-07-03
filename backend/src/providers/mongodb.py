import pymongo
from src.providers.configs import mongodb_config

try:
    client = pymongo.MongoClient(mongodb_config["connect"])
    client.admin.command("ping")

    for node in client.nodes:
        print("Connected to MongoDB node " + node[0])

    db = client.get_default_database()

except pymongo.errors.ConfigurationError as error:
    raise Exception("Config Error: " + str(error))
except pymongo.errors.ConnectionFailure:
    raise Exception("Connection Error: Database is not available")


def cleanup_mongodb():
    if client is None:
        return
    print("Closing DB connections...")
    client.close()
