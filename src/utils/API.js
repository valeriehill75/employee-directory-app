import axios from "axios";
import uuid from "react-uuid";

export default {
    getEmployees: function () {
        return new Promise((resolve, reject) => {
            axios
                .get("https://randomuser.me/api/?results=100&nat=us")
                .then(res => {
                    const employees = res.data.results;
                    const results = employees.map(employee => {
                        return {
                            first: employee.name.first,
                            last: employee.name.last,
                            image: employee.picture,
                            email: employee.email,
                            phone: employee.phone,
                            ID: uuid()
                        }
                    })
                    resolve(results)
                })
                .catch(err => reject(err))
        })
    }
};