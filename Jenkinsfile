pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
        HOME="${env.WORKSPACE}"
    }

    stages {
        stage('Dependencies'){
            steps {
                echo "Workplace ${DB_ENGINE}"
                sh 'npm i'
                
            }
        }
    }
}