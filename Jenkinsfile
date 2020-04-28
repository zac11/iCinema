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
                sh 'rm -rf node_modules'
                sh 'npm ci'
                sh 'cd client'
                sh 'npm ci'
                sh 'cd ..'
                sh 'pwd'
            }
        }

        stage('run the web server') {
            steps {
                // for some reason react- scripts are not getting found
                sh 'npm i react-scripts'
                sh 'npm run test:ci'
                sh 'sleep 30'
            }

        }
    }


}

