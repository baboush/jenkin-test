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
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest --activate'
                sh 'pnpm i --frozen-lockfile'
            }
        }
        stage('Lint') {
            steps {
                sh 'pnpm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'pnpm test -- --coverage'
            }
        }
    }

    post {
        success { echo '✅ Pipeline réussi' }
        failure { echo '❌ Pipeline échoué' }
    }
}
