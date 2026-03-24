pipeline {
    agent {
        docker {
            image 'node:20'
            args '-u root'
        }
    }

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test -- --coverage'
            }
        }
    }

    post {
        success { echo '✅ Pipeline réussi' }
        failure { echo '❌ Pipeline échoué' }
    }
}
