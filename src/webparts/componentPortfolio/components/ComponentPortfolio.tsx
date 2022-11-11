import * as React from 'react';
// import styles from './ComponentPortfolio.module.scss';
import { IComponentPortfolioProps } from './IComponentPortfolioProps';
import Popofunctionlity from './Popofunctionlity';
import  PopupGfg  from './TextEditor';

export default class ComponentPortfolio extends React.Component<IComponentPortfolioProps, {}> {
  public render(): React.ReactElement<IComponentPortfolioProps> {

    return (
      <div>
        <div>
          <h5>Portfolios</h5>
          <h1>Component Portfolio <PopupGfg/></h1>
        </div>
        
        <Popofunctionlity/>
      </div>
    );
  }
}
