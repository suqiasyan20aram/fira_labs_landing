module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key: 'key.pem',
      user : 'bitnami',
      host : '35.157.98.153',
      ref  : 'origin/master',
      repo : 'https://github.com/suqiasyan20aram/fira_labs_landing.git',
      path : '',
      'pre-deploy-local': '',
      'post-deploy' : 'npm run build && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
