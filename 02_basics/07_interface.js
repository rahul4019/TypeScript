"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rahul = {
    DbId: 295710,
    email: 'rahul@gmail.com',
    userId: 295792,
    githubToken: 'github',
    startTrial: function () {
        return 'trial started';
    },
    getCoupon: function (name, off) {
        return 10;
    },
};
rahul.email = 'r@gmail.com';
// rahul.DbId =35 -> not allowed as it is readonly
var gaurav = {
    DbId: 295710,
    email: 'rahul@gmail.com',
    userId: 295792,
    githubToken: 'github',
    startTrial: function () {
        return 'trial started';
    },
    getCoupon: function (name, off) {
        return 10;
    },
    role: 'learner',
};
