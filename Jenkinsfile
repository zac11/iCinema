pipeline {
    agent {
        docker {
            image 'cypress/browsers:node12.13.0-chrome80-ff74'
        }
    }

    stages {
        stage('build'){
            environment {
                 CHROME_BIN = '/bin/google-chrome'
            }
            steps {
                sh 'rm -rf node_modules'
                sh 'npm i'
                sh 'cd client'
                sh 'npm i'
                // for some reason axios is not getting installed
                sh 'npm install --save axios'
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

