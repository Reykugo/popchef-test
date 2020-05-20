COLOR=\033[;32m
NC=\033[0m

.PHONY: install start stop logs.watch all

all:
	@echo "------------------------------------"
	@echo "Run ${COLOR}make install${NC} to install project dependencies for dev"
	@echo "Run ${COLOR}make start${NC} to start local services"
	@echo "Run ${COLOR}make stop${NC} to stop local services"
	@echo "Run ${COLOR}make logs.watch${NC} to show logs in watch mode"
	@echo "------------------------------------"


build: ## Build apps
	cd packages/common && npm run build
	cd packages/back && npm run build

install:
	npm install
	npx lerna bootstrap


start: build ## Start dev environment
	npx pm2 start

stop:
	npx pm2 delete all

logs.watch:
	npx pm2 logs all

test:
	cd packages/common && npm run test
	cd packages/back && npm run test
	cd packages/front && npm run test
