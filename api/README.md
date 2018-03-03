# HTTPS Express API Test

## SSL Setup and Renewal

1.  `certbot certonly --manual --debug -d api.kocina.io`
2.  `ssh -i /path/to/nano-test.pem ec2-user@107.21.72.202`
3.  `sudo su -`
4.  `emacs /home/ec2-user/dev/node-test/ssl.js` add path and response
5.  `ps -A | grep node`
6.  `kill -9 ___` kill node if it is running
7.  `emacs /home/ec2-user/dev/keys/kocina.crt` update cert with fullchain.pem
8.  `emacs /home/ec2-user/dev/keys/kocina.key` update key with privkey.pem
9.  `export NODE_TEST_CERTIFICATE="/home/ec2-user/dev/keys/kocina.crt"`
10. `export NODE_TEST_PRIVATE_KEY="/home/ec2-user/dev/keys/kocina.key"`
11. `node /home/ec2-user/dev/node-test/ssl.js &`