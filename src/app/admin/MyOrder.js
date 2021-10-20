import axios from "axios";
import React, {useState, useEffect} from "react";

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([])
    useEffect(
        () => {
            loadMyOrder();
        },[]);
    const loadMyOrder = async () =>{
        const result = await axios.get("http://localhost:8081/orders");
        setMyOrder(result.data);
    }
    return (
        <div id="myorder">
             <table class="table border shadow" id="adminOrderBody">
                    <thead>
                        <tr>
                            <th scope="col" className="rowstyle">Product Name</th>
                            <th scope="col" className="rowstyle">Price</th>
                            <th scope="col" className="rowstyle">Quantity</th>
                            <th scope="col" className="rowstyle">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map((ord, index) => (
                                <tr class="align-middle">
                                    
                                    <td class="rowstyle">{ord.bookName}</td>
                                    <td class="rowstyle">{ord.price}</td>
                                    <td class="rowstyle">{ord.quantity}</td> 
                                    <td class="rowstyle">{ord.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
    );
}

export default MyOrder;