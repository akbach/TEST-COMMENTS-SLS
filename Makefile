## todo
deploy: build-front build-api deploy-sls

install: 
	npm install -g serverless && \
	serverless plugin install -n serverless-s3-sync 

build-front:
	cd comments-front && npm i && npm run build && cd ..

build-api:
	cd comments-api && npm i && npm run build-sls && cd ..

deploy-sls:
	serverless deploy --verbose

dev:
	docker-compose up