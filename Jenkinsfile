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
                sh 'npm start'
                sh 'sleep 30'
            }

        }

        stage('Run Cypress tests'){
            steps{
                sh 'npm run test'
            }
        }
    }


}

