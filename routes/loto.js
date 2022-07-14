const fs = require('fs');

const async = require("async");

const https = require('https');

const express = require('express');

const router = express.Router();

const Loto539 = require('../models/loto539');

const Loto649 = require('../models/loto649');


router.get("/loto539x",function(req, res) {
  res.render("loto539x");
});

router.get("/loto649x",function(req, res) {
  res.render("loto649x");
});

router.get("/coloto539x",function(req, res) {
  res.render("coloto539x");
});

router.get("/coloto649x",function(req, res) {
  res.render("coloto649x");
});

router.get("/preloto649",function(req, res) {
 res.render("preloto649");
});

router.get("/preloto649x",function(req, res) {
 res.render("preloto649x");
});

module.exports = router;