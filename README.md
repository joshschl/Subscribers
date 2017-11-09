# Subscriber App

Demo App for storing and updating subscribers on the IMS platform.

## Architecture

* Webserver: Nginx
* Database: Mongodb
* REST API: node.js/express
* Client App: Angular

## Quick Start

```bash
docker-compose up
```

## CRUD

Supported operations

* Create Subscriber: `POST /api/subscribers`. E.g:
````
curl -H "content-type: application/json" -XPOST 'http://localhost/api/subscribers' -d '
{
  "phoneNumber": "16043407938",
  "username": "234238954785",
  "password": "abc123",
  "domain": "ims.telus.mnc000.mcc111.3gppnetwork.org",
  "status": "ACTIVE",
  "features": {
	"callForwardNoReply": {
	  "provisioned": true,
	  "destination": "tel:+1604555555596789889"
	}
  }
}'
````
* Get Subscribers: `GET /api/subscribers`. E.g.
````
curl -H "content-type: application/json" 'http://localhost/api/subscribers'
````
* Get a Subscriber: `GET /api/subscribers/5a020279a8b3120010c95319`. E.g.
````
curl -H "content-type: application/json" 'http://localhost/api/subscribers/5a020279a8b3120010c95319'
````
* Update a Subscriber: `PUT /api/subscribers/5a020279a8b3120010c95319`. E.g.
````
curl -H "content-type: application/json" -XPUT 'http://localhost/api/subscribers/5a020279a8b3120010c95319' -d '
{
    "status": "DISABLED",
    "features": {
        "callForwardNoReply": {
            "provisioned": false,
        }
    }
}'
````
* Delete a Subscriber: `DELETE /api/subscribers/5a020279a8b3120010c95319`. E.g.
````
curl -XDELETE 'http://localhost/api/subscribers/5a020279a8b3120010c95319'
````