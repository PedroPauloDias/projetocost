import {useHistory} from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {

    const history = useHistory()
    function creatPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method:'POST',
            headers :{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
                    console.log(data)
                    // Redirect
         history.push('/projects', {message:'Projeto criado com sucesso !'})           
        })
        .catch(err => console.log(err))

    }

    return (
        <div className ={styles.newproject_container}> 
            <h1>Criar Projeto </h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
           <ProjectForm handleSubmit={creatPost} btnText = "Criar projeto"/>


        </div>

    )
}
export default NewProject