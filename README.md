# py-vrt-playwright-english

## _Demo >> [Visual Regression Tracker Dashboard](http://139.59.33.178/c162b87d-c1d0-4348-a428-17ffb9c1e38b/#)_

###  Description 
Demo of Visual Testing with Playwright

#### Steps to run project:

- Run the following script
```bash
./run-baseline-AND-compare.sh
```
#
- Create baseline from Prod
```bash
npm run test:baseline
```
- Compare expected with Prod
```bash
npm run test:compare
```
#
`VRT .env Config`

#
```
VRT_APIURL=http://139.59.33.178:4200
VRT_PROJECT=c162b87d-c1d0-4348-a428-17ffb9c1e38b
VRT_APIKEY=M9ZEMRAJT449JDKGQH7GX45HRBNG
VRT_BRANCHNAME=develop-py
```
