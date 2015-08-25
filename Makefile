all:
	pip install -r requirements.txt

migrate:
	python manage.py makemigrations
	python manage.py migrate

run: all migrate
	python manage.py runserver