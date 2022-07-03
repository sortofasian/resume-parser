# resume-parser

## Components

-   ### backend
    A Flask based REST API for processing resumes and indexing them
-   ### user-frontend
    A React frontend for submitting new resumes and managing past submissions
-   ### admin-frontend
    A React frontend for searching through submitted resumes

## Backend

### Configuration

Configuration is store in a `config.json` file in the backed directory. It should look like this:

```json
{
    "mongodb": {
        "user": "mongodb-user",
        "password": "mongodb-password",
        "address": "my.mongodb.instance:12345",
        "srv": false,
        "db": "resume-parser-database"
    },
    "flask": {}
}
```

The `flask` parameter is currently for development only.

### ID lengths

-   User ID: `nanoid(20)`
-   Resume ID: `nanoid(30)`
-   Session ID: `nanoid(40)`
