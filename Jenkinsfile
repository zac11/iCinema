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
            }
        }
    }


}

