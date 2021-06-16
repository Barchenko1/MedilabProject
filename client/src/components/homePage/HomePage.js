import React from 'react';
import './HomePage.scss';
import SearchBar from "../forms/SearchBar";
import {ChartBar, ChartLine, ChartPie} from "../graphics/Chart";
import {connect} from "react-redux";
import {findQuote} from "../../actions/quoteActions";

class HomePage extends React.Component {

    onTermSubmit = term => {
        console.log(term);
        this.props.findQuote(term);
    };

    // constructor(){
    //     super();
    //     this.state = {
    //         chartData:{}
    //     }
    // }

    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        // Ajax calls here
        this.setState({
            chartData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets:[
                    {
                        label:'Population',
                        data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div>
                <SearchBar label="Quote search" onFormSubmit={this.onTermSubmit}/>
                <div className="graphics">
                    <div className="graphics_item">
                        <ChartBar chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
                    </div>
                    <div className="graphics_item">
                        <ChartLine chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
                    </div>
                    <div className="graphics_item">
                        <ChartPie chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
                    </div>
                    <div className="graphics_item">
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        quote:state.quoteReducer.quote
    }
}

export default connect(mapStateToProps, {findQuote})(HomePage);
