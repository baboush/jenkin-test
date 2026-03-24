pipeline {
    agent {
        docker {
            image 'node:20'
            args '--user root'
        }
    }

    stages {
        stage('Install') {
            steps {
                sh "rm -rf node_modules"
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
                sh 'npx pnpm test'
            }
        }
    }

    post {
        success { echo '✅ Pipeline réussi !' }
        failure { echo '❌ Pipeline échoué.' }
    }
}
