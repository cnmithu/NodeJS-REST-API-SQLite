# Introduction

Simple REST API using Node.js with Koa and Sqllite

where:
* connect on port 3000
* login and retrieve a token for further requests
* fetch devices with supplied token

# API endpoints to implement

## Login [POST /login]

+ Request

    {
        "email": "test@test.com",
        "password": "test"
    }

+ Response 200 OK

    {
        "email": "test@test.com",
        "token": "c6d8f431bb564638a699ce605f97f7d70054fcc7981a41ffa167da099bcc28cd"
    }


## Retrieve devices [GET /devices]

+ Request

    + Headers

        Authorization: Bearer c6d8f431bb564638a699ce605f97f7d70054fcc7981a41ffa167da099bcc28cd

+ Response 200 OK

    [
        {
            "id": "d90b2f56-4752-4952-b0b5-b1f77e422615",
            "type": "device",
            "name": "Entrance",
            "model": "M3045",
            "firmware": "9.10",
            "site": "xxx"
        },
        {
            "id": "3ef5e8e6-9ffa-4852-ad97-641c3cba229d",
            "type": "device",
            "name": "Register",
            "model": "Q1005",
            "firmware": "5.50",
            "site": "xxx"
        },
        {
            "id": "26d13d27-1911-44ea-bb8a-0a5af28d5f71",
            "type": "device",
            "name": "Warehouse",
            "model": "P3310",
            "firmware": "9.20",
            "site": "xxx"
        }
    ]

