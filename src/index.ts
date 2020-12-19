import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('./data/football.csv')
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United');
const consoleSummary = Summary.winsAnalysisWithConsoleReport('Man United');

matchReader.load();
htmlSummary.buildAndPrintReport(matchReader.matches);
consoleSummary.buildAndPrintReport(matchReader.matches);
