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
      repo : 'git@github.com:suqiasyan20aram/fira_labs_landing.git',
      path : '',
      'pre-deploy-local': 'ssh -i key.pem bitnami@35.157.98.153',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
