#!/usr/bin/env node

const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

execSync('git clone https://github.com/codersera-repo/expo-native-starter-kit.git', {stdio: 'inherit'});
