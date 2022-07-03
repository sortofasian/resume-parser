import pymongo

client = None
db = None


def load(dbconfig: dict):
    try:
        client = pymongo.MongoClient(dbconfig["connect"])
        client.admin.command("ping")

        for node in client.nodes:
            print("Connected to MongoDB node " + node[0])

        db = client.get_default_database()
        return db

    except pymongo.errors.ConfigurationError as error:
        raise Exception("Config Error: " + str(error))
    except pymongo.errors.ConnectionFailure:
        raise Exception("Connection Error: Database is not available")


def cleanup():
    if client is None:
        return
    print("Closing DB connections...")
    client.close()
