const express = require('express');
const app = express();
const cors = require('cors');

const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

app.use(express.urlencoded({extended: 'true'}));
app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'secret-code',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    session: true,
    passReqToCallback: false
}, (id, password, done)=>{

    db.collection('user').findOne({id: id}, (err, user)=>{

        if(err) return done(err);

        if(!user) return done(null, false, {message: '존재하지 않는 아이디입니다.'});

        if(password === user.pw){
            return done(null, user); // 비밀번호 검증에 성공했을시 유저 정보를 serialize의 user로 보냄
        } else {
            return done(null, false, {message: '비밀번호가 틀렸습니다.'});
        }

    })
}))

// Strategy 성공시 호출
passport.serializeUser((user, done)=>{
    done(null, user); // 여기서의 user는 deserialize의 유저로 옮겨감.
})

// 해당 세션데이터를 가진 사람의 정보가 db에 있는지 확인
passport.deserializeUser((user, done)=>{
    db.collection('user').findOne({id: user.id}, (err, result)=>{
        done(null, result.nickname);
    })
})

const MongoClient = require('mongodb').MongoClient;


let db;
MongoClient.connect('mongodb+srv://shon5544:sbs32465169132184@cluster0.19f58.mongodb.net/dawn-coding-database?retryWrites=true&w=majority', (err, client)=>{
    if(err) return console.log(err);

    db = client.db('dawn-coding');
    app.listen('8080', ()=>{
        console.log('8080으로 접속 완료');
    })
});


app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info)=>{
        if(err) return next(err);

        if(!user) return res.send(info);

        req.logIn(user, (err) => {
            if(err) return next(err);
            
            return res.json({user: true});
        })
    })(req, res, next)
});

app.get('/isLogined', (req, res)=>{
    console.log(req.user);
    if(req.user){
        res.send(req.user);
    } else {
        res.send(false)
    }
})


app.post('/regist', (req, res)=>{
    console.log(req.body);
    db.collection('user').findOne({id: req.body.id}, (err, result) => {
        if(result){
            res.send({state: 'already-id'});
        } else {
            db.collection('user').findOne({nickname: req.body.nickname}, (err, result) => {
                if(result){
                    res.send({state: 'already-nickname'})
                } else {
                    db.collection('user').insertOne(req.body, (err, result) => {
                        if(err) console.log(err);
                        res.send({state: 'OKAY'});
                    });
                }
            })
        }
    });

});
