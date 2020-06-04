# API Documents

### Authentication
```
http://localhost:3000/signup
{
	"email":"dummuyId80@gmail.com",
	"password":123456
}
```

```
http://localhost:3000/login

{
	"email":"dummuyId80@gmail.com",
	"password":123456
}
```


### Contact
- Get Contacts
```
http://localhost:3000/api/v1/contact/get

res:
{
    "contacts": [
        {
            "_id": "5eaf986e58c9853276a1a336",
            "name": "1 contact",
            "email": "1contact@gmail.com",
            "businessId": "5eae7f0c038c5d29098e7331",
            "phone": 8076181683,
            "__v": 0
        }
    ]
}

```


- Update Contact
```
http://localhost:3000/api/v1/contact/update/:id
http://localhost:3000/api/v1/contact/update/5ea4176a128946193e83f922
req:
{
	"email":"21contact@gmail.com",
	"name":"21 contact",
	"phone":8076181683
}

res:
{
    "msg": "contact update sucessfully",
    "contact": null
}
```

-  Delete Contact
```
http://localhost:3000/api/v1/contact/delete

req:
{
	"ids":["5ea4172f128946193e83f920","5ea41758128946193e83f921"]
}

res:
{
    "msg": "contacts deleted sucessfully"
}

```



- Create Contact
```
http://localhost:3000/api/v1/contact/save
req:
{
	"name":"createContact1",
	"email":"createContact@gmail.com",
	"phone":"9414451354"  (optional)
}

res:
{
    "msg": "contact create sucessfully"
}
```


### Question
- Add Question 
```
http://localhost:3000/api/v1/question/add

req:
{
	"questions":[{"text":"Any feedback for improvement"},{"text":"Would you recommend us"}]
}

res:
{
    "msg": "questions inserted sucessfully"
}

```

- Get Question
```
http://localhost:3000/api/v1/question/get
res:
{
    "questions": [
        {
            "_id": "5eaf98bb58c9853276a1a337",
            "text": "Any feedback for improvement",
            "__v": 0
        },
        {
            "_id": "5eaf98bb58c9853276a1a338",
            "text": "Would you recommend us",
            "__v": 0
        },
        {
            "_id": "5ed544be58bf7706be22d404",
            "text": "Did you like our service",
            "__v": 0
        }
    ]
}
```
### Reviews
- Get Review URL
```
http://localhost:3000/api/v1/review/reviewUrl

req:
{
	"contactId":"5eaf986e58c9853276a1a336"
}

res:
{
    "url": "http://localhost:3000/review?cid=5eaf986e58c9853276a1a336?rid=5ed9433b6473e198288a46a6"
}
```

- Add Reviews
```
http://localhost:3000/api/v1/review/add
req:{
"rid":"5eb38b86f2e6cfc88a82554e",	
"questions":["5eaf98bb58c9853276a1a337","5eaf98bb58c9853276a1a337"],
"answers":[{"5eaf98bb58c9853276a1a337":"you need to improve on quality"},{"5eaf98bb58c9853276a1a338":"will have to think"}]

}


res:
{
    "msg": "reviews saved sucessfully"
}
```

- Get Reviews

```
http://localhost:3000/api/v1/review/get

res:
{
    "reviewList": [
        {
            "questions": [],
            "answers": [],
            "_id": "5ed9433b6473e198288a46a6",
            "contactId": "5eaf986e58c9853276a1a336",
            "businessId": "5eae7f0c038c5d29098e7331",
            "createdAt": "2020-06-04T18:53:47.346Z",
            "updatedAt": "2020-06-04T18:53:47.346Z",
            "__v": 0,
            "url": "http://localhost:3000/review?cid=5eaf986e58c9853276a1a336?rid=5ed9433b6473e198288a46a6"
        },
        {
            "questions": [
                "5eaf98bb58c9853276a1a337",
                "5eaf98bb58c9853276a1a337"
            ],
            "answers": [
                {
                    "5eaf98bb58c9853276a1a337": "you need to improve on quality"
                },
                {
                    "5eaf98bb58c9853276a1a338": "will have to think"
                }
            ],
            "_id": "5eb38b86f2e6cfc88a82554e",
            "contactId": "5eaf986e58c9853276a1a336",
            "businessId": "5eae7f0c038c5d29098e7331",
            "createdAt": "2020-05-07T04:16:06.007Z",
            "updatedAt": "2020-05-07T04:16:06.007Z",
            "__v": 0,
            "url": "http://localhost:3000/review?cid=5eaf986e58c9853276a1a336?rid=5eb38b86f2e6cfc88a82554e"
        }
    ]
}
```






