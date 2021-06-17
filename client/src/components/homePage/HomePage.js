import React from 'react';
import './HomePage.scss';
import SearchBar from "../forms/SearchBar";
import {ChartBar, ChartLine, ChartPie} from "../graphics/Chart";
import {connect} from "react-redux";
import {findQuote, getQuoteStatistic} from "../../actions/quoteActions";
import {getPlanMetalTierStatistic} from "../../actions/planActions";
import {getEmployeesStatistic} from "../../actions/employeeActions";

class HomePage extends React.Component {

    componentDidMount() {
        this.props.getEmployeesStatistic();
        this.props.getQuoteStatistic();
        this.props.getPlanMetalTierStatistic();
    }

    onTermSubmit = term => {
        console.log(term);
        this.props.findQuote(term);
    };

    constructor(){
        super();
        this.state = {
            chartData:{},
            employeesStatisticData: {},
            quoteCreationStatisticData: {},
            plansMetalTierStatisticData: {}
        }
    }

    componentWillMount(){
        this.getEmployeeCreationStatistic();
        this.getPlanMetalTierStatistic();
        this.getQuoteCreationStatistic();
    }

    initializeQuoteLabels() {
        let data = [];
        this.props.quoteStatistic.map((quoteInfo, index) => {
            data.push(new Date(quoteInfo.dateOfCreate).toLocaleDateString())
        });
        console.log(data);
        return data;
    }

    initializeQuoteData() {
        let data = [];
        this.props.quoteStatistic.map((quoteInfo, index) => {
            data.push(quoteInfo.quoteCount)
        });
        console.log(data);
        return data;
    }

    initializePlanLabels() {
        let data = [];
        this.props.planStatistic.map((planInfo, index) => {
            data.push(planInfo.metalTier)
        });
        console.log(data);
        return data;
    }

    initializePlanData() {
        let data = [];
        this.props.planStatistic.map((planInfo, index) => {
            data.push(planInfo.planCount)
        });
        console.log(data);
        return data;
    }

    initializeEmployeesLabels() {
        let data = [];
        this.props.employeesStatistic.map((employeeInfo, index) => {
            data.push(new Date(employeeInfo.dateOfCreate).toLocaleDateString())
        });
        console.log(data);
        return data;
    }

    initializeEmployeesData() {
        let data = [];
        this.props.employeesStatistic.map((employeeInfo, index) => {
            data.push(employeeInfo.employeeCount)
        });
        console.log(data);
        return data;
    }

    getEmployeeCreationStatistic(){
        // Ajax calls here
        this.setState({
            employeesStatisticData:{
                labels: this.initializeEmployeesLabels(),
                datasets:[
                    {
                        label:'Employees',
                        data: this.initializeEmployeesData(),
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


    getQuoteCreationStatistic(){
        // Ajax calls here
        this.setState({
            quoteCreationStatisticData:{
                labels: this.initializeQuoteLabels(),
                datasets:[
                    {
                        label:'Quotes',
                        data: this.initializeQuoteData(),
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

    getPlanMetalTierStatistic(){
        // Ajax calls here
        this.setState({
            plansMetalTierStatisticData:{
                labels: this.initializePlanLabels(),
                datasets:[
                    {
                        label:'Plans',
                        data: this.initializePlanData(),
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

    // getChartData(){
    //     // Ajax calls here
    //     this.setState({
    //         chartData:{
    //             labels: this.initializeQuoteLabels(),
    //             datasets:[
    //                 {
    //                     label:'Quotes',
    //                     data: this.initializeQuoteData(),
    //                     backgroundColor:[
    //                         'rgba(255, 99, 132, 0.6)',
    //                         'rgba(54, 162, 235, 0.6)',
    //                         'rgba(255, 206, 86, 0.6)',
    //                         'rgba(75, 192, 192, 0.6)',
    //                         'rgba(153, 102, 255, 0.6)',
    //                         'rgba(255, 159, 64, 0.6)',
    //                         'rgba(255, 99, 132, 0.6)'
    //                     ]
    //                 }
    //             ]
    //         }
    //     });
    // }

    render() {
        return (
            <div>
                <SearchBar label="Quote search" onFormSubmit={this.onTermSubmit}/>
                <div className="graphics">
                    <div className="graphics_item">
                        <ChartBar chartData={this.state.employeesStatisticData} location="Massachusetts" legendPosition="bottom"/>
                    </div>
                    <div className="graphics_item">
                        <ChartLine chartData={this.state.quoteCreationStatisticData} location="Massachusetts" legendPosition="bottom"/>
                    </div>
                    <div className="graphics_item">
                        <ChartPie chartData={this.state.plansMetalTierStatisticData} location="Massachusetts" legendPosition="bottom"/>
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
        quote:state.quoteReducer.quote,
        employeesStatistic: state.employeeReducer.employeesStatistic,
        quoteStatistic: state.quoteReducer.quoteStatistic,
        planStatistic: state.planReducer.planStatistic
    }
}

export default connect(mapStateToProps, {findQuote, getQuoteStatistic, getPlanMetalTierStatistic, getEmployeesStatistic})(HomePage);
