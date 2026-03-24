pipeline {
    agent {
        docker {
            image 'node:20'
            args '-u 1000:1000'
        }
    }

    environment {
        NODE_ENV = 'test'
        // Optionnel : définit un cache local pour pnpm pour éviter les conflits
        PNPM_HOME = "${WORKSPACE}/.pnpm"
        PATH = "${PATH}:${WORKSPACE}/.pnpm"
    }

    stages {
        stage('Install') {
            steps {
                // On a retiré le rm -rf car il causera des erreurs si les permissions changent
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
                // Ajout de --run pour que Vitest ne reste pas en mode "watch"
                sh 'npx pnpm test -- --run --coverage'
            }
        }
    }

    post {
        success { echo '✅ Pipeline réussi' }
        failure { echo '❌ Pipeline échoué' }
    }
}
