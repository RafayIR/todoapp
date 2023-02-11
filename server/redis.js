const Redis = require('ioredis');

const redis = new Redis({
    host: 'redis-15557.c212.ap-south-1-1.ec2.cloud.redislabs.com',
    port: 15557,
    username: "default", // needs Redis >= 6
    password: 'IyPdAIufyRAKuZCerBQP6BRdIl9iWl0J'
});

module.exports=redis;