pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('1fe75ff7-3325-4fbb-927d-788a3461e268')
        BACKEND_IMAGE = 'sidharthsingh7/ss_backend'
        FRONTEND_IMAGE = 'sidharthsingh7/ss_user_frontend'
        DOCKER_TAG = '0.0.2.RELEASE'
    }

    stages {
        stage('Build') {
            parallel {
                stage('Build Backend Image') {
                    steps {
                        script {
                            
                            // Build the backend Docker image
                            sh 'docker build -t $BACKEND_IMAGE:$DOCKER_TAG ./backend'
                        }
                    }
                }
                stage('Build Frontend Image') {
                    steps {
                        script {
                            
                            // Build the frontend Docker image
                            sh 'docker build -t $FRONTEND_IMAGE:$DOCKER_TAG ./user_frontend'
                        }
                    }
                }
            }
        }

        stage('Push') {
            parallel {
                stage('Push Backend Image') {
                    steps {
                        script {
                            docker.withRegistry('https://index.docker.io/v1/', '1fe75ff7-3325-4fbb-927d-788a3461e268') {
                                def backendImage = docker.image("$BACKEND_IMAGE:$DOCKER_TAG")
                                backendImage.push()
                            }
                        }
                    }
                }
                stage('Push Frontend Image') {
                    steps {
                        script {
                            docker.withRegistry('https://index.docker.io/v1/', '1fe75ff7-3325-4fbb-927d-788a3461e268') {
                                def frontendImage = docker.image("$FRONTEND_IMAGE:$DOCKER_TAG")
                                frontendImage.push()
                            }
                        }
                    }
                }
            }
        }
    }
}