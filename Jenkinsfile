pipeline {
    agent any

    environment {
        IMAGE_NAME     = "nixhal33/my_portfolio"
        IMAGE_TAG      = "latest"
        DEPLOY_SERVER  = credentials('deploy-server-ip')
        DEPLOY_USER    = "ubuntu"
        COMPOSE_PATH   = "/home/ubuntu/portfolio"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-pat',
                    url: 'https://github.com/nixhal33/my_portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${IMAGE_NAME}:${IMAGE_TAG}
                    """
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                sshagent(['deploy-server-ssh-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${DEPLOY_SERVER} '
                            mkdir -p ${COMPOSE_PATH}
                        '
                        scp -o StrictHostKeyChecking=no docker-compose.yml ${DEPLOY_USER}@${DEPLOY_SERVER}:${COMPOSE_PATH}/docker-compose.yml
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${DEPLOY_SERVER} '
                            cd ${COMPOSE_PATH}
                            docker pull nixhal33/my_portfolio:latest
                            docker compose down || true
                            docker compose up -d
                        '
                    """
                }
            }
        }
    }

    post {
        success {
            echo "Deployment successful — portfolio is live."
        }
        failure {
            echo "Pipeline failed. Check the logs above."
        }
        always {
            sh "docker logout || true"
        }
    }
}
