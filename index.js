#!/usr/bin/env node

const execSync = require('child_process').execSync;
const prompt = require('prompt');
let gName = 'expo-starter-kit';

prompt.get([{
    name: 'name',
    description: 'Enter the project name, the directory will be created with the same name.',
    type: 'string',
    required: true
}], function(err, results) {
    console.log(results);
    gName = results['name'];
});

execSync(`git clone https://github.com/codersera-repo/expo-native-starter-kit.git ${gName}`, {stdio: 'inherit'});
