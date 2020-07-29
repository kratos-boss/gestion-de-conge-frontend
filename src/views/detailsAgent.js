import React, { useEffect }   from 'react';
import { useParams}   from 'react-router-dom';
import { createNotification } from '../myFonctions';

const DetailsAgent = (props) => {

    const paramsId = useParams();
    const [agent, setAgent] = React.useState({
        Id: '',
        nom: '',
        prenom: '',
        email: '',
        fonction: '',
        situationMatrimoniale: '',
        sexe: '',
        telephone: '',
        dateNaissance:'',
        dateEmbauche:'',
        status: '',
        calendrier: '',
        compte: '',
        division: '',
        autorisationAbsences: [],
        conges: [],
        createdAt: '',
        updatedAt: '',
    })

    const fetchDatas = async () => {
        try {
            const response = await fetch('/', {
                method: 'POST',
                body: JSON.stringify({
                    query: ` query{findAgent(id: "${paramsId.id}"){
                        nom prenom sexe fonction situationMatrimoniale
                    }}`
                }),
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': 'Bearer '+ sessionStorage.getItem("token")
                }
            })
            console.log(response);
            const data  = await response.json();
            if(data.errros)
                throw data.errors;
            
            return setAgent(data.data.findAgent);
        } catch (errors) {
            if(errors.length > 0){
                errors.map(function(err){
                    console.log(err.message);
                    return createNotification("Erreur", "danger", err.message, "top-left");
                })
            }
        }
    }

    useEffect(() => {
        fetchDatas();
        console.log(agent);
    }, []);
    return <div>
                Tous les informations sur un agents

        </div>
}

export default DetailsAgent;