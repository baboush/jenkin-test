pipeline {
    agent {
        docker {
            image 'node:20'
            args '-u 1000:1000'
        }
    }

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npx pnpm install --frozen-lockfile'            }
        }
        stage('Lint') {
            steps {
                sh 'npx pnpm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'npx pnpm test -- --coverage'
            }
        }
    }

    post {
        success { echo '✅ Pipeline réussi' }
        failure { echo '❌ Pipeline échoué' }
    }
}
