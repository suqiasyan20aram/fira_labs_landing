module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key: 'key.pem',
      user : 'bitnami',
      host : '18.197.2.81',
      ref  : 'origin/master',
      repo : 'https://github.com/suqiasyan20aram/fira_labs_landing.git',
      path : 'home/bitnami',
      'pre-deploy-local': '',
      'post-deploy' : 'npm run build && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
