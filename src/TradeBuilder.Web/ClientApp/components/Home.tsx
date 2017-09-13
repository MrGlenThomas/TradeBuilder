import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="container-fluid">
            <h1>Orders</h1>
            <div className="card">
                <h3 className="card-header text-center">
                    Vodaphone Call Dec20 500 
                </h3>
                       <div className="card-block">
                    <button className="btn btn-outline-info btn-sm" type="button" data-toggle="collapse" data-target="#collapseOrders1" aria-expanded="false" aria-controls="collapseOrders1">
                               Show Orders
                           </button>
                       </div>

                <div className="collapse" id="collapseOrders1">
                    <div className="container-fluid">
                        <div className="row">
                    <div className="col-sm-6">
                        <h4>Buy</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <input type="checkbox" name="vehicle" value="Bike" />
                                <span>Morgan Stanley 1000</span>
                            </li>
                            <li className="list-group-item">
                                <input type="checkbox" name="vehicle" value="Bike" />
                                <span>Barclays 500</span>
                            </li>
                            <li className="list-group-item">
                                <input type="checkbox" name="vehicle" value="Bike" />
                                <span>Traders 2000</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <h4>Sell</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <input type="checkbox" name="vehicle" value="Bike"/>
                                <span>Morgan Stanley 1000</span>
                            </li>
                            <li className="list-group-item">
                                <input type="checkbox" name="vehicle" value="Bike" />
                                <span>Barclays 500</span>
                            </li>
                            <li className="list-group-item">
                                <input type="checkbox" name="vehicle" value="Bike" />
                                <span>Traders 2000</span>
                            </li>
                            <li className="list-group-item">
                                <input type="checkbox" name="vehicle" value="Bike" />
                                <span>Capital People 9800</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="row">
                        <p>Selected: 2500 buy : 2500 sell</p>
                        <button className="btn btn-success">Trade</button>
                    </div>
                    </div>
                </div>
            </div>
                   <div className="card">
                       <h3 className="card-header text-center">
                           Tesco Straddle Dec20/Jan21/Feb21/Mar21 500/580/600/620
                       </h3>
                       <div className="card-block">
                           <button className="btn btn-outline-info btn-sm" type="button" data-toggle="collapse" data-target="#collapseOrders2" aria-expanded="false" aria-controls="collapseOrders2">
                               Show Orders
                           </button>
                       </div>

                       <div className="collapse" id="collapseOrders2">
                    <div className="container-fluid">
                        <div className="row">
                           <div className="col-sm-6">
                               <h4>Buy</h4>
                               <ul className="list-group list-group-flush">
                                   <li className="list-group-item">
                                       <input type="checkbox" name="vehicle" value="Bike" />
                                       <span>Morgan Stanley 1000</span>
                                   </li>
                                   <li className="list-group-item">
                                       <input type="checkbox" name="vehicle" value="Bike" />
                                       <span>Barclays 500</span>
                                   </li>
                                   <li className="list-group-item">
                                       <input type="checkbox" name="vehicle" value="Bike" />
                                       <span>Traders 2000</span>
                                   </li>
                                   <li className="list-group-item">
                                       <input type="checkbox" name="vehicle" value="Bike" />
                                       <span>Citi 350</span>
                                   </li>
                               </ul>
                           </div>
                           <div className="col-sm-6">
                               <h4>Sell</h4>
                               <ul className="list-group list-group-flush">
                                   <li className="list-group-item">
                                       <input type="checkbox" name="vehicle" value="Bike" />
                                       <span>Morgan Stanley 1000</span>
                                   </li>
                                   <li className="list-group-item">
                                       <input type="checkbox" name="vehicle" value="Bike" />
                                       <span>Barclays 500</span>
                                   </li>
                                   <li className="list-group-item">
                                       <input type="checkbox" name="vehicle" value="Bike" />
                                       <span>Traders 2000</span>
                                   </li>
                               </ul>
                           </div>
                            </div>
                           <div className="row">
                               <p>Selected: 2500 buy : 2500 sell</p>
                               <button className="btn btn-success">Trade</button>
                           </div>
                        </div>
                    </div>
                   </div>
        </div>;
    }
}
