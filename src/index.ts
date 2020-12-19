import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';

import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CSVFileReader('./data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United');
const consoleSummary = Summary.winsAnalysisWithConsoleReport('Man United');

htmlSummary.buildAndPrintReport(matchReader.matches);
consoleSummary.buildAndPrintReport(matchReader.matches);
