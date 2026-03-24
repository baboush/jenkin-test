pipeline {
    agent {
        docker {
            image 'node:20'
            // On reste en 1000 pour que tu gardes la main sur les fichiers après le build
            args '-u 1000:1000'
        }
    }

    stages {
        stage('Install') {
            steps {
                // --store-dir ./pnpm-store force pnpm à écrire le cache dans le projet
                // cela évite de taper dans /home/node/ qui peut avoir des soucis de droits
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
                // --run est crucial pour que Jenkins ne reste pas bloqué
                sh 'npx pnpm test -- --run'
            }
        }
    }

    post {
        success { echo '✅ Pipeline réussi ! Bravo Arnaud.' }
        failure { echo '❌ Pipeline échoué. Vérifie les logs de permission.' }
    }
}
