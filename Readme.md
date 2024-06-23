<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [API](#api)
    - [Tools used:](#tools-used)
    - [process of retrieving data](#process-of-retrieving-data)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# API
A backend rest-api that allows user to perform (CRUD)create read update delete
from product database

running on localhost port 5000

to start program run :"npm run start:watch"

### Tools used:
express.

nodemon


dotenv

pg

postgresql =>database products table products 

### process of retrieving data
localhost:5000/products => retrieve data
localhost:5000/products/product_id => retrieve one product
localhost:5000/products/product_id => delete a product
localhost:5000/products/product_id =>update a product


