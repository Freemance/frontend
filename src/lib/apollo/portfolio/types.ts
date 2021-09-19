import { PortfolioItemType } from 'src/context/state';

export interface IProfileCreatePortfolioRes {
  profileCreatePortfolio: PortfolioItemType;
}

export interface IProfileCreatePortfolioInput {
  input: PortfolioItemType;
}

export interface IProfileUpdatePortfolioRes {
  profileUpdatePortfolio: PortfolioItemType;
}

export interface IProfileUpdatePortfolioInput {
  id: number;
  input: PortfolioItemType;
}

export interface IProfileDeletePortfolioRes {
  profileDeletePortfolio: boolean;
}

export interface IProfileDeletePortfolioInput {
  id: number;
}
