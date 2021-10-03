# formaink

## Development Setup

For independent work of frontend and backend on local machine, add 

```
"proxy": "http://127.0.0.1:8000/"
```

to ```package.json```. 

Then from ```backend``` folder run:

```
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
python3 manage.py makemigrations users ... 
# (add all backend application names)
python3 manage.py migrate
python3 manage.py collectstatic
python3 manage.py loaddata fixtures.json
python3 manage.py runserver
```

in fixtures superuser credentials are admin@admin.com & admin


From ```frontend``` folder run 

```
npm install
npm run start
```

naked API will be available at http://127.0.0.1:8000/api/v1/,
API schema is at http://127.0.0.1:8000/redoc/ or http://127.0.0.1:8000/swagger/,
front + back will be at http://localhost:3000/