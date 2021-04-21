import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('./data/football.csv')
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United');
const consoleSummary = Summary.winsAnalysisWithConsoleReport('Man United');

matchReader.load();
htmlSummary.buildAndPrintReport(matchReader.matches);
consoleSummary.buildAndPrintReport(matchReader.matches);


const words = ["two", "two", "three", "four", "five"];
const wordTally:any = {};

for (let i of words) {
  wordTally[i] = (wordTally[i] || 0) + 1;
}

console.log(wordTally);