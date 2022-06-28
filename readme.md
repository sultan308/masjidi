# **Masjidi**

A web app serving masjids details and providing a space to share feedback about them.

The backend was devolped by me from scratch. Please note that the frontend was made following a tutorial as the purpose of it was to have an idea of how the react framework intarct's with the backend.


## Installation
```bash
$ git clone git@github.com:sultan308/masjidi.git working-directory-name
$ cd working-directory-name
$ cd server
$ npm install
$ cd ../client
$ npm install
``` 
Then rename the ".example.env" file in the server folder to .env and enter your environment values. 
## GUI Usage
### Home page
![Home page image](https://raw.githubusercontent.com/sultan308/masjidi/main/imgs/home-page.png)
#### From the home page the user can :
* Add a new Masjid
* Click on a masjid to got to it's page
* Delete a masjid 
* Go to the masjid update page by clicking update
* See all masjids with their average rating, number of reviews and locaton

### Masjid page
![Masjid page image](https://raw.githubusercontent.com/sultan308/masjidi/main/imgs/masjid-page.png)
#### From the Masjid page the user can :
* Add a new review
* View masjid revies 
* See all the masjid details
  
Note : The review color changes in correspondence with the rating value.

### Update masjid page
![Update masjid page image](https://raw.githubusercontent.com/sultan308/masjidi/main/imgs/update-masjid-page.png)
#### From the Update masjid page the user can :
* Change the masjd name
* Change the masjid location 

Note : After clicking update the user will be redirected to the home page.

---
## API Usage

### ```GET``` Requests:

#### ```{host}/api/v1/masjid```
##### Request body
none


**Successful Response** : 

```200``` and JSON with attributes :

* ```status``` Always equal success if the request was successful
* ```length``` The number od masjid ojects returned
* ```data``` An array of masjid objects Each having:
  
  * ```id``` Masjid id
  * ```name``` Masjid name
  * ```location``` masjid location
  * ```avg_rating``` Average rating
  * ```count``` Number of reviews that the Masjid has
  
Example JSON
```json
{ 
    "status": "success" ,
    
    "length": 4 ,

    "data": [
        {
            "id": "1",
            "name": "Canterbury mosque",
            "location": "UK, England , Canterbury, Uni",
            "avg_rating": "3.4",
            "count": "16"
        },
        {
            "id": "58",
            "name": "Mosque",
            "location": "1 Street, town, city, postcode, Country",
            "avg_rating": "4.0",
            "count": "4"
        }
    ],
    
}
```

**Error Responses :**


Error status code and JSON with attributes :
* ```status``` Always equal Fail if the request was failed
* ```statusCode``` HTTP error status code
* ```msg``` error message
  
Example JSON
```json
{
    "status": "Fail",
    "statusCode": 500,
    "msg": "Error occured"
}
```
Possible erros:
* StatusCode : ```500```  and msg: ```"Error occured"``` | internal server error
 
#### ```{host}/api/v1/masjid/:id```
Where ```:id``` is the id of the requested masjid

##### Request body
none


**Successful Response** : 

```200``` and JSON with attributes :

* ```status``` Always equal success if the request was 
* ```data``` An Masjid objects  having:
  
  * ```id``` Masjid id
  * ```name``` Masjid name
  * ```location``` masjid location
  * ```avg_rating``` Average rating
  * ```count``` Number of reviews that the Masjid has
  
Example JSON
```json
{
    "status": "success",
    "data": {
        "id": "1",
        "name": "Canterbury mosque",
        "location": "UK, England , Canterbury, Uni",
        "avg_rating": "3.4",
        "count": "16"
    }
}
```

**Error Responses :** 


Error status code and JSON with attributes :
* ```status``` Always equal Fail if the request was failed
* ```statusCode``` HTTP error status code
* ```msg``` error message
  
Example JSON
```json
{
    "status": "Fail",
    "statusCode": 400,
    "msg": "Masjid id needs to be a number."
}
```
Possible erros:
* StatusCode : ```400```  and msg: ```"Masjid id needs to be a number."``` | Supplied id wasn't an integer.
* StatusCode : ```404```  and msg: ```"Masjid doesn't exist"``` | Masjid wasn't found.
* StatusCode : ```500```  and msg: ```"Error occured"``` | internal server error.




## Contributing
This project was created to practice newly acquired skills and is not intended for real usage however, if you have any recommendations for improvements or have noticed something that could have been implemented better please don't hesitate to open a new issue I would really appricate it as will help me in my learning journey. 