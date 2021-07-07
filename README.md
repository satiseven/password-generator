# password-generator
password generator wrote in nodejs for terminal,it will work in portable
# install the package
 after cloning the resp you shoud enter to direcory and
- npm install 

# How to make it command
### if you want to execute the command line
be sure package.json file has
-  "preferGlobal": true,
-   "bin": "index.js",
 ### index.js file should have
 ```ssh
 #!/usr/bin/env node
 ```
 ### should install package
 ```ssh
 npm install -g C:\Users\riza\Desktop\password-generator
 ```
 ### open terminal and run 
 ```ssh 
  password-generator
  ```
  # options
  - -length=10 will generate password length 10
  - -nn will disable numbers
  -  -ns will disable symbols
  -  -s will save the file in the directory
  
