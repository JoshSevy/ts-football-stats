"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCSV('./data/football.csv');
var htmlSummary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
var consoleSummary = Summary_1.Summary.winsAnalysisWithConsoleReport('Man United');
matchReader.load();
htmlSummary.buildAndPrintReport(matchReader.matches);
consoleSummary.buildAndPrintReport(matchReader.matches);
var words = ["two", "two", "three", "four", "five"];
var wordTally = {};
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var i = words_1[_i];
    wordTally[i] = (wordTally[i] || 0) + 1;
}
console.log(wordTally);
