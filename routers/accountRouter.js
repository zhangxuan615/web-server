const express = require('express');
const fs = require('fs');
const path = require('path');
const AccountModel = require('../models/accountModel');

const router = express.Router();

router.get(['/', '/login'], function (req, res) {

    fs.readFile(path.join(__dirname, '../views/login.html'), 'utf-8', (err, data) => {
        if (err) {
            return res.end('404 Not Found...');
        }

        res.send(data);
    });
});

router.get(['/register'], function (req, res) {

    fs.readFile(path.join(__dirname, '../views/register.html'), 'utf-8', (err, data) => {
        if (err) {
            return res.end('404 Not Found...');
        }

        res.send(data);
    });
});

router.post('/login', function (req, res) {

    const { username, password } = req.body;
    AccountModel.findByUsername(username, (err, data) => {
        if (err) {
            return res.send(err);
        }

        if (data.length === 0 || data[0].password !== password) {
            return res.send('用户名或者密码错误');
        }

        return res.send('登陆成功');
    });

});

module.exports = router;