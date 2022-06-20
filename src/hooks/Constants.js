import { useEffect, useState } from "react";
import { useConstants } from "./DefaultConstants";
import {constantsApi} from "***/constantApi";

export const Constants = () => {
  const api = constantsApi("test", "***");
  const defaultCondition = useConstants();

  const [depositParams, setDepositParams] = useState(defaultCondition);

  useEffect(() => {
    try {
      api.getTag("MaxIncome").then((value) => {
        setDepositParams((prevState) => ({
          ...prevState,
          MaxIncomeName: value.MaxIncomeName,
          MaxIncomeHeadline: value.MaxIncomeHeadline,
          MaxIncomeSubtitle: value.MaxIncomeSubtitle,
          MaxIncomePercent: value.MaxIncomePercent,
          MaxIncomeAdvantage1: value.MaxIncomeAdvantage1,
          MaxIncomeAdvantage2: value.MaxIncomeAdvantage2,
          MaxIncomeAdvantage3: value.MaxIncomeAdvantage3,
          MaxIncomeAdvantage4: value.MaxIncomeAdvantage4,
          MaxIncomeMinTime: value.MaxIncomeMinTime,
          MaxIncomeMiddleTime:value.MaxIncomeMidTime,
          MaxIncomeMaxTime: value.MaxIncomeMaxTime,
          MaxIncomeInterestPayment: value.MaxIncomeInterestPayment,
          MaxIncomeRefill: value.MaxIncomeRefill,
          MaxIncomeDate1: value.MaxIncomeDate1,
          MaxIncomeBonusPercent: value.MaxIncomeBonusPercent,
          MaxIncomeDate2: value.MaxIncomeDate2,
        }));
      });

      api.getTag("calculator-myLife").then((value) => {
        setDepositParams((prevState) => ({
          ...prevState,
          MyLifeDate: value.MyLifeDate,
          percentCashbackInternet: value['myLife-cashbackInternet'],
          percentCashbackCommunal: value['myLife-cashbackCommunal'],
          percentCashbackPurchases: value['myLife-cashbackPurchases'],
        }));
      });

    } catch (error) {}
  }, []);

  return depositParams;
};
