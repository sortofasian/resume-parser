def config(db_options: dict):
    expected_options = ["srv", "user", "password", "address", "db"]

    # Config validity check
    for option in db_options:
        if option not in expected_options:
            raise Exception('MongoDB config invalid: unknown option "' + option + '"')

    missing_keys = []
    for expectation in expected_options:
        if expectation not in db_options:
            missing_keys.append('"' + expectation + '"')

    if missing_keys:
        raise Exception("MongoDB config invalid: missing option(s) " + missing_keys)

    # Connection string generation
    if db_options["srv"] is True:
        srv = "+srv"

    template = "mongodb{}://{}:{}@{}/{}"

    return {
        "connect": template.format(
            srv,
            db_options["user"],
            db_options["password"],
            db_options["address"],
            db_options["db"],
        )
    }
