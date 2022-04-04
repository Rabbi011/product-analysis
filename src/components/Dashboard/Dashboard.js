import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

import useGraph from '../../hooks/useGraph';

const Dashboard = () => {
    const [graphs, setGraphs] = useGraph();
    return (

        <div >

            <div class="container mt-5">
                <div class="row">
                    <div class="col-6">
                        <h3 className='text-info mb-3 fw-bolder'>Month With Sell</h3>
                        <LineChart width={400} height={400} data={graphs}>
                            <Line dataKey={'sell'}></Line>
                            <XAxis dataKey={'month'}></XAxis>
                            <YAxis></YAxis>
                            <Tooltip />

                        </LineChart>
                    </div>

                    <div class="col-6">
                        <h3 className='text-info mb-3 fw-bolder'>Investment Vs Revenue</h3>
                        <AreaChart
                            width={500}
                            height={400}
                            data={graphs}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="revenue" stroke="green" fill="green" />
                        </AreaChart>
                    </div>
                    <div class="col-6">

                        <h3 className='text-info mb-3 mt-5 fw-bolder'>Investment Vs Revenue</h3>
                        <BarChart
                            width={500}
                            height={400}
                            data={graphs}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        </BarChart>

                    </div>
                    <div class="col-6">
                    <h3 className='text-info mb-3 mt-5 fw-bolder'>Investment Vs Revenue</h3>
                        <PieChart width={400} height={400}>
                            <Pie data={graphs} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />

                            <Pie data={graphs} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                            <Tooltip />
                        </PieChart>
                    </div>

                </div>
            </div>
            {/* <div className='container d-flex justify-content-between mt-5'>
            <div >
              
            </div>

            <div>
                
            </div>
           </div> */}
        </div >
    );
};

export default Dashboard;