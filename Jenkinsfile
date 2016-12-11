#!groovy

def getPackageVersion(){
  return sh (
    script: 'cat package.json | grep version | head -1 | awk -F: \'{ print $2 }\' | sed \'s/[\\",]//g\' | tr -d \'[[:space:]]\'',
    returnStdout: true
  ).trim()
}

node {

    def nodeHome = tool name: 'node_v_6.2.1', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = '${nodeHome}/bin:${env.PATH}'

    stage 'Check Environment'
    sh 'node -v'
    sh 'npm -v'

    stage 'checkout SCM'
    checkout scm

    stage 'install dependencies'
    sh 'npm install'

    stage 'Linter Test'
    sh 'npm run test:linter:report'

    stage 'Unit tests'
    sh 'npm run test:unit:report'

    stage 'Code coverage test'
    sh 'npm run test:cover:report'

    def version =  getPackageVersion()

    if ( env.BRANCH_NAME ==~ /.*develop.*/ ){
 

    }else if( env.BRANCH_NAME ==~ /.*master.*/ ){


    }else if( env.BRANCH_NAME ==~ /.*PR.*/ ){


    }

}