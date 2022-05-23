# Pipeline Build Statuses

## Sandbox Pipeline Checks

This environment does not run any validations and is meant as a playground for new features before deployment to the development site.

## Development Site

[![devl-build-checks](https://github.com/pperepa/lasyam_website/actions/workflows/devl-site-validation.yml/badge.svg)](https://github.com/pperepa/lasyam_website/actions/workflows/devl-site-validation.yml)

GitHub Pages Deployment Status:  
[![pages-build-deployment](https://github.com/pperepa/lasyam_website/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/pperepa/lasyam_website/actions/workflows/pages/pages-build-deployment)

This site builds of the "development" branch of this repository and can be found by clicking this link: [Lasyam Website (Development Version)](https://pperepa.github.io/lasyam_website/)

## Production Site

[![deploy-site-prod](https://github.com/pperepa/lasyam_website/actions/workflows/deploy-site-prod.yml/badge.svg)](https://github.com/pperepa/lasyam_website/actions/workflows/deploy-site-prod.yml)

The actual website for this repository can be found by clicking this link: [Lasyam Website (Production Version)](https://www.lasyam.org/). It builds off the "main" branch of this repository.  

The GitHub Actions pipeline for the "main" branch will deploy the new package contents to the web server that hosts the production website.  
