import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CSVFileReader } from './CSVFileReader';

const csvFileReader = new CSVFileReader('./data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


console.log(`Manchester United won ${manUnitedWins} games`);

