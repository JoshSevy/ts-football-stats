"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CSVFileReader_1 = require("./CSVFileReader");
var csvFileReader = new CSVFileReader_1.CSVFileReader('./data/football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log("Manchester United won " + manUnitedWins + " games");
