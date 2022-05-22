# Pipeline Build Statuses

# Sandbox Pipeline Checks

[![deploy-site-prod](https://github.com/pperepa/lasyam_website/actions/workflows/deploy-site-prod.yml/badge.svg?branch=sandbox)](https://github.com/pperepa/lasyam_website/actions/workflows/deploy-site-prod.yml)

This environment will run only the status checks that need to pass in order for the prod site to deploy, without actually deploying to the webserver or using the DEVL environment's pages build.  

## Development Site

[![deploy-site-prod](https://github.com/pperepa/lasyam_website/actions/workflows/deploy-site-prod.yml/badge.svg?branch=development)](https://github.com/pperepa/lasyam_website/actions/workflows/deploy-site-prod.yml)

This site builds of the "development" branch of this repository and can be found by clicking this link: [Lasyam Website (Development Version)](https://pperepa.github.io/lasyam_website/)

## Production Site

[![deploy-site-prod](https://github.com/pperepa/lasyam_website/actions/workflows/deploy-site-prod.yml/badge.svg?branch=main)](https://github.com/pperepa/lasyam_website/actions/workflows/deploy-site-prod.yml)

The actual website for this repository can be found by clicking this link: [Lasyam Website (Production Version)](https://www.lasyam.org/). It builds off the "main" branch of this repository.  

The GitHub Actions pipeline for the "main" branch will deploy the new package contents to the web server that hosts the production website.  
