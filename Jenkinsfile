pipeline {
    agent {
        docker {
            image 'cypress/base:10'
        }
    }

    stages {
        stage('build'){
            environment {
                 CHROME_BIN = '/bin/google-chrome'
            }
            steps {
                sh 'npm ci'
                sh 'cd client'
                sh 'npm ci'
                sh 'cd ..'
                sh 'pwd'
            }
        }

        stage('run the web server') {
            steps {
                // wait-on will wait untill the server is up
                sh 'nohup npm start > /dev/null 2>&1 & wait-on http://localhost:3000'
            }
        }

        stage('Run Cypress tests'){
            steps{
                sh 'npm run test'
            }
        }
    }


}

