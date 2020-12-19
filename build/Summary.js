"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HTMLReport_1.HTMLReport());
    };
    Summary.winsAnalysisWithConsoleReport = function (teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new ConsoleReport_1.ConsoleReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
