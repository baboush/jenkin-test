pipeline {
    agent {
        docker {
            image 'node:20'
        }
    }

    stages {
        stage('Install') {
            steps {
                sh 'npx pnpm install --frozen-lockfile'
            }
        }
        stage('Lint') {
            steps {
                sh 'npx pnpm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'npx pnpm test -- --run'
            }
        }
    }

    post {
        success { echo '✅ Pipeline réussi !' }
        failure { echo '❌ Pipeline échoué.' }
    }
}
