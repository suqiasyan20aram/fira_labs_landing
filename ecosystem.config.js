module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      // key: 'key.pem', // fira_labs
      key: 'key-nginx-1.pem', // nginx-1
      user : 'bitnami',
      // host : '35.157.98.153', // fira_labs
      host : '54.93.126.157', // nginx-1
      ref  : 'origin/master',
      repo : 'git@github.com:suqiasyan20aram/fira_labs_landing.git',
      path : '/home/bitnami/fira_labs_landing',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
