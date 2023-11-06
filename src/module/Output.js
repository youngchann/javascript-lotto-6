import { MissionUtils } from '@woowacourse/mission-utils';
import { message } from '../Consts';
import totalReturn from './TotalReturn';

class Output {
  static printUserLottos(purchasedLottoArray) {
    MissionUtils.Console.print(
      `${purchasedLottoArray.length}개를 구매했습니다.`,
    );
    purchasedLottoArray.forEach(lotto => MissionUtils.Console.print(lotto));
  }

  static printWinningStatistics(matchCount) {
    MissionUtils.Console.print(message.winningStatistics);
    MissionUtils.Console.print(
      `${message.threeMatches + matchCount.threeMatches}개`,
    );
    MissionUtils.Console.print(
      `${message.fourMatches + matchCount.fourMatches}개`,
    );
    MissionUtils.Console.print(
      `${message.fiveMatchesMatches + matchCount.fiveMatches}개`,
    );
    MissionUtils.Console.print(
      `${message.fiveBonusMatchesMatches + matchCount.fiveBonusMatches}개`,
    );
    MissionUtils.Console.print(
      `${message.sixMatches + matchCount.sixMatches}개`,
    );
  }

  static printTotalReturn(purchasedLotto, matchCount) {
    MissionUtils.Console.print(
      `총 수익률은 ${totalReturn(purchasedLotto, matchCount)}%입니다.`,
    );
  }
}

export default Output;