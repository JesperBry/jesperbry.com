build:
	docker build -t client .

run:
	docker run --rm --name react-client -p 3000:3000 client

clean-up:
	docker rm -f react-client