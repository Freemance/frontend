import { PortfolioItemType } from 'src/context/state';

export interface IProfileCreatePortfolioRes {
  profileCreatePortfolio: PortfolioItemType;
}

export interface IProfileCreatePortfolioInput {
  files?: FileList;
  input: PortfolioItemType;
}

export interface IProfileUpdatePortfolioRes {
  profileUpdatePortfolio: PortfolioItemType;
}

export interface IProfileUpdatePortfolioInput {
  files?: FileList;
  id: number;
  input: PortfolioItemType;
}

export interface IProfileDeletePortfolioRes {
  profileDeletePortfolio: boolean;
}

export interface IProfileDeletePortfolioInput {
  id: number;
}
