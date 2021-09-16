# formaink

## Development Setup

For independent work of frontend and backend on local machine, add 

```
"proxy": "http://127.0.0.1:8000/"
```

to ```package.json```. 

Then from ```backend``` folder run:

```
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations users ... 
# (add all backend application names)
python manage.py migrate
python manage.py collectstatic
python manage.py loaddata fixtures.json
```
From ```frontend``` folder run 

```
npm install
npm run start
```

naked API will be available at http://127.0.0.1:8000/api/v1/,
API schema is at http://127.0.0.1:8000/redoc/ or http://127.0.0.1:8000/swagger/,
front + back will be at http://localhost:3000/