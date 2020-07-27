import React from 'react';

const Calendrier =  (props) => {
    const dateDebutRef = React.createRef();
    const dateFinRef = React.createRef();

    const [errors, setErrors] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [datas, setDatas] = React.useState([]);

    // fetch datas functions
    const fetchDatas = async () => {
        try {
            let queryBody = {
                query: ` query{calendriers{Id dateDebut dateFin createdAt updatedAt }}`
            }
            setLoading(true);
            const response = await fetch('http://localhost:8888/api/',{
                method: "post",
                body: JSON.stringify(queryBody),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
           
            const  {data}  = await response.json();
            setErrors([]);
            setLoading(false);
            return setDatas(data.calendriers);
        }catch(err){
            console.log(err)
            throw err;
        }
    } 

    // when components is loading
    React.useEffect(function() {
        fetchDatas();
    }, [])


    const requestBody = (dateDebut, dateFin) =>{
        console.log(dateDebut+" et " + dateFin);
        return { query: `
            mutation{
                createCalendrier(input:{dateDebut: "${dateDebut}",dateFin: "${dateFin}"}){
                    Id 
                    dateDebut
                    dateFin
                    createdAt
                }
            }
        `}
    }
    

    const handleSubmit = async (ev) => {
       try {
        ev.preventDefault();
        // fetch data from database

        const response = await fetch('http://localhost:8888/api', {
            method: "POST",
            body: JSON.stringify(requestBody(dateDebutRef.current.value, dateFinRef.current.value)),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        if(data.errors){
            return setErrors(data.errors);
        }

        setErrors([]);
        return fetchDatas();

       } catch (error) {
           console.log(error);
           return setErrors(error);
       }
    }

    //handle delete 
    const handleDelete = () => {
        console.log("click")
    }

    return(
        <div className="row p-3">
             {errors.length > 0 && (
                        errors.map(error => <p key={error.message} className="alert alert-danger">{error.message}</p>)
                    )}
            <div className="col-md-8">
            {loading ? (
                <div className="spinner-border text-center text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ):(
            <div className="card border-top border-primary">
                <div className="card-header">
                <h4 className="font-weight-bold">Listes des calendriers </h4>    
                </div>    
                <div className="card-body">
                <table className="table table-responsive table-hover">
                  <thead>                  
                    <tr>
                      <th className="font-weight-bold"># ID</th>
                      <th className="font-weight-bold">DateDebut</th>
                      <th className="font-weight-bold">DateFin</th>
                      <th className="font-weight-bold">Date creation</th>
                      <th className="font-weight-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  { datas.length > 0 ? (
                    datas.map(function(cal){
                        return (
                            <tr key={cal.Id}>
                                <td>{cal.Id}</td>
                                <td>{cal.dateDebut}</td>
                                <td>{cal.dateFin}</td>
                                <td className="text-muted">{cal.createdAt}</td>
                                <td className="d-flex justify-content-around">
                                    <i 
                                     onClick={async function(){
                                        try {
                                            const result = await fetch("http://localhost:8888/api/",
                                        {
                                            method: "post",
                                            body: JSON.stringify({query: `mutation{deleteCalendrier(id: "${cal.Id}")}`}),
                                            headers: {'Content-Type': 'application/json'}
                                        }) 
                                        const data = await result.json();
                                        if(data.errors)
                                        return setErrors(data.errors);
                                        
                                        console.log(data.data.deleteDivision);
                                        return fetchDatas();
                                        } catch (error) {
                                            console.log(error);
                                            return setErrors(error);
                                        }
                                    }}  
                                    
                                    className="fa fa-trash text-danger"></i>
                                    <i 
                                        className="fa fa-google">
                                        
                                    </i>
                                </td>
                        </tr>
                    )
                })           
                  
                ): (<tr><td rowSpan="4"  className="alert alert-danger">La list est vide </td></tr>)}
                  </tbody>
                </table>
              </div>
              {/* <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><NavLink className="page-link" to="#">&laquo;</NavLink></li>
                  <li className="page-item"><NavLink className="page-link" to="#">2</NavLink></li>
                  <li className="page-item"><NavLink className="page-link" to="#">1</NavLink></li>
                  <li className="page-item"><NavLink className="page-link" to="#">3</NavLink></li>
                  <li className="page-item"><NavLink className="page-link" to="#">&raquo;</NavLink></li>
                </ul>
              </div> */}
            </div>
            )}
        </div>
            <div className="col-md-4">
                <div className="card card-outline card-primary">
                    <div className="card-header">
                        <h3 className="text-center">Enrégistrement des vagues</h3>
                    </div>
                    <div className="card-header">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="dateDebut">Entrez le date du début</label>
                                <input ref={dateDebutRef} className="form-control" id="dateDebut" type="date" placeholder="Date du début" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateFin">Entrez le date de fin</label>
                                <input ref={dateFinRef} className="form-control"  id="dateFin" type="date" placeholder="Date de Fin" required />
                            </div>
                            <div className="form-group">
                                <input type="submit" onSubmit={handleSubmit} className="btn btn-success"  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendrier;