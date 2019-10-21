export interface IContentSection {
  title: string;
}

export interface IOptionListItem {
  isDisable: boolean;
  text: string;
  typeCheck?: boolean;
  typeWithdrawal?: boolean;
  typeInsurance?: boolean;
  typeDiscount?: boolean;
  typeAccess?: boolean;
  typeSupport?: boolean;
}

export interface IOptionsListRuler {
  planCost: number;
  isOptionDisable: string [];
}
