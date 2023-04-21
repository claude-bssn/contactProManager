# taskManager
## web

to launch this project you need to create a mongoDB project and provide the connection key in the ```.env```

you will need node.js in order to launch the project 

- first run ```npm install``` in project root file (just the first time or if dependency is manually added)
- then run ```npm start``` to start project

## Api
you can access the service using the api see the following postman schemas 

``` {
	"info": {
		"_postman_id": "38a3195d-9cc7-40d3-beaa-18cb27c6438b",
		"name": "contactManagerApi",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "14599961"
	},
	"item": [
		{
			"name": "get all contact",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:8080/api",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"api"
					]
				}
			},
			"response": []
		},
		{
			"name": "get contact by id",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:8080/api/:id",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"api",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": "6442555b7feef9c9435903e4"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "create new contact",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"lastName\":\"Popo\",\n    \"firstName\":\"Marie\",\n    \"company\":\"Glass Studio\",\n    \"address\":\"25 rue du chemin\",\n    \"phone\":\"0987987698\",\n    \"email\":\"glass@mail.com\",\n    \"sector\":\"education\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:8080/api/new",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"api",
						"new"
					]
				}
			},
			"response": []
		},
		{
			"name": "update contact by id",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"lastName\":\"Poupa\",\n    \"firstName\":\"marie\",\n    \"company\":\"Glass Studio\",\n    \"address\":\"25 rue du chemin\",\n    \"phone\":\"0987987698\",\n    \"email\":\"glass@mail.com\",\n    \"sector\":\"education\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:8080/api/edit/:id",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"api",
						"edit",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": "644269dca5bf3d0084478e90"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "delete a contact by its id ",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "localhost:8080/api/delete/:id",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"api",
						"delete",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": "644267772150fcbcee6f657a"
						}
					]
				}
			},
			"response": []
		}
	]
}
```
