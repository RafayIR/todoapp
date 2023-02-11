const Redis = require('ioredis');

const redis = new Redis({
    host: 'redis-17503.c92.us-east-1-3.ec2.cloud.redislabs.com',
    port: 17503,
    username: "default", // needs Redis >= 6
    password: 'ARX4bFNEhX1CkhbICMox3exmfqk45rRm'
});

module.exports=redis;