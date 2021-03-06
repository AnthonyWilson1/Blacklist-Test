const passport = require('passport')


module.exports = (app) => {
app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get('/api/logout', (req,res) => {
    req.logout();
    res.redirect('/');
});

app.get('/api/current_user', (req, res) => {
    console.log(req.user)
    res.json(req.user);
});

app.get(
    '/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
        console.log('Entered Redirect')
        res.redirect('/dashboard')
    })
}
