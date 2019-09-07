import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot,
   LineSeries,
   XAxis,
   YAxis,
   VerticalGridLines,
   HorizontalGridLines,} from 'react-vis';
import OutlinedTextFields from './components/outlinedTextFields';
import SimpleCard from './components/simpleCard';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  state = { data: [
    {x: 0, y: 100},
    {x: 1, y: 90},
    {x: 2, y: 80},
    {x: 3, y: 110},
    {x: 4, y: 100},
    {x: 5, y: 100},
  ],

differenceCardTitle: "Difference",
differenceCardContent: 100 - 100,

openCardTitle: "Open",
openCardContent: 100,

closeMidCardTitle: "Close",
closeCardContent: 100,

miscCardTitle: "Misc.",
miscCardContent: 100

}
  stockInfoCallBackFunction = (gcpStockData) => {
        this.setState(prevState => ({
          data: [...prevState.data, gcpStockData]
        }))
  }
  render() {
    return (
      <div className="App">
        <Grid container spacing={3}>

        <Grid item xs={12}>
          <OutlinedTextFields parentCallback = {this.stockInfoCallBackFunction}></OutlinedTextFields>
        </Grid>

        <Grid item xs={6} sm={3}>
            <SimpleCard 
              cardTitle = {this.state.differenceCardTitle}
              cardContent = {this.state.differenceCardContent}
            ></SimpleCard>
        </Grid>
        <Grid item xs={6} sm={3}>
            <SimpleCard 
              cardTitle = {this.state.openCardTitle}
              cardContent = {this.state.openCardContent}
            ></SimpleCard>
        </Grid>
        <Grid item xs={6} sm={3}>
            <SimpleCard
              cardTitle = {this.state.closeMidCardTitle}
              cardContent = {this.state.closeCardContent}
            ></SimpleCard>
        </Grid>
        <Grid item xs={6} sm={3}>
            <SimpleCard
              cardTitle = {this.state.miscCardTitle}
              cardContent = {this.state.miscCardContent}
            ></SimpleCard>
        </Grid>

        <Grid item xs={12}>
            <XYPlot height={500} width={1430}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={this.state.data} />
            </XYPlot>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default App;