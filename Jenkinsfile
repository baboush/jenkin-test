pipeline {
    agent {
        docker {
            image 'node:20'
        }
    }

    stages {
        stage('Prepare') {
            steps {
                sh 'mkdir -p node_modules pnpm-store && chown -R node:node .'
            }
        }
        stage('Install') {
            steps {
                sh 'npx pnpm install --frozen-lockfile --store-dir ./pnpm-store'
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
        always {
            sh 'chown -R 1000:1000 . || true'
        }
        success { echo '✅ Pipeline réussi ! Bravo Arnaud.' }
        failure { echo '❌ Pipeline échoué. Vérifie les logs de permission.' }
    }
}
